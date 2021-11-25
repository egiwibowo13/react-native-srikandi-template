import {CancelToken} from 'axios';
import {AuthService} from '@data/api/AuthService';
import TokenManager from '@services/TokenManager';
import {LoginRequest} from '@data/model/LoginModel';

export const AuthUseCase = {
  login,
  logout,
};

const tokenManager = new TokenManager();

async function login(request: LoginRequest, token: CancelToken) {
  try {
    const result = await AuthService.login(request, token);
    await tokenManager.setToken({accessToken: result.token ?? ''});
  } catch (error) {
    throw error;
  }
}

async function logout() {
  try {
    await tokenManager.deleteToken();
  } catch (error) {
    throw error;
  }
}
