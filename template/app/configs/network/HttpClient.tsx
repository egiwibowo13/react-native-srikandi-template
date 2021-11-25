import axios, {AxiosInstance} from 'axios';
import {API_BASE_URL} from '@env';
import {
  AuthInterceptor,
  ErrorInterceptor,
  ResponseInterceptor,
} from './Interceptors';

const httpClient: AxiosInstance = axios.create({
  baseURL: API_BASE_URL,
  timeout: 3000, // 3s
  headers: {
    'Content-Type': 'application/json',
    Accept: 'application/json',
  },
});

httpClient.interceptors.request.use(AuthInterceptor);
httpClient.interceptors.response.use(ResponseInterceptor, ErrorInterceptor);

export default httpClient;
