import axios, {AxiosRequestConfig, AxiosError, AxiosResponse} from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';

function getLocalStorage<T>(key: string): Promise<T | null> {
  return AsyncStorage.getItem(key).then(result => {
    if (result !== null) {
      return JSON.parse(result) as T;
    }
    return null;
  });
}

interface RefreshToken {
  authToken: string;
  refreshToken: string;
  saveAccessToken: (str: string) => void;
  saveRefreshToken: (str: string) => void;
}
/**
 * Provide function to get / remove access token from local storage
 * @return {String}
 */
const localStorage = {
  getAccessToken: () => getLocalStorage<string>('accessToken'),
  removeAccessToken: () => AsyncStorage.removeItem('accessToken'),
  saveAccessToken: (token: string) =>
    AsyncStorage.setItem('accessToken', token),
  getRefreshToken: () => getLocalStorage<string>('refreshToken'),
  removeRefreshToken: () => AsyncStorage.removeItem('refreshToken'),
  saveRefreshToken: (token: string) =>
    AsyncStorage.setItem('refreshToken', token),
};

const serviceAction = {
  /**
   * Provide function to get auth token from service api
   * @return {String}
   */
  getAuthToken: async () => {
    // do your action here
    return ''; // return your access token
  },

  /**
   * Provide function to refresh token and get access token from service api
   * @param {String} authToken
   * @param {String} refreshToken
   * @param {Function} saveAccessToken
   * @param {Function} saveRefreshToken
   * @return {String}
   */
  refreshToken: async ({
    authToken,
    refreshToken,
    saveAccessToken,
    saveRefreshToken,
  }: RefreshToken) => {
    // do refress token here
    console.log({authToken, refreshToken, saveAccessToken, saveRefreshToken});
    return ''; // return new access token
  },
};

const AuthNotify = {
  logout: () => {},
};

const AuthInterceptor = async (config: AxiosRequestConfig) => {
  const originalRequest = config;
  const accessToken = await localStorage.getAccessToken();
  if (accessToken) {
    originalRequest.headers.Authorization = `Bearer ${accessToken}`;
  } else {
    const authToken = await serviceAction.getAuthToken();
    originalRequest.headers.Authorization = `Bearer ${authToken}`;
  }
  return originalRequest;
};

// interceptor to catch errors
const ErrorInterceptor = async (error: AxiosError) => {
  const originalRequest = error.config;
  // all the error responses
  switch (error?.response?.status) {
    case 400:
      //   notify.warn('Nothing to display', 'Data Not Found');
      break;

    case 401:
      try {
        const authToken = await serviceAction.getAuthToken();
        const refreshToken = await localStorage.getRefreshToken();
        if (refreshToken !== null) {
          const accessToken = await serviceAction.refreshToken({
            authToken,
            refreshToken,
            saveAccessToken: localStorage.saveAccessToken,
            saveRefreshToken: localStorage.saveRefreshToken,
          });
          originalRequest.headers.Authorization = `Bearer ${accessToken}`;
          return axios(originalRequest);
        }
      } catch (err) {
        localStorage.removeAccessToken();
        localStorage.removeRefreshToken();
        AuthNotify.logout();
        Promise.reject(err);
      }
      break;

    default:
      //   notify.error('Server Error');
      break;
  }
  return Promise.reject(error);
};

// Interceptor for responses
const ResponseInterceptor = (response: AxiosResponse) => {
  return response;
};

export {AuthInterceptor, ErrorInterceptor, ResponseInterceptor};
