import {CancelToken} from 'axios';
import {post} from '@configs/network/Networking';
import {LoginRequest, LoginResponse} from '../model/LoginModel';

export const AuthService = {
  login,
};

function login(
  body: LoginRequest,
  cancelToken?: CancelToken,
): Promise<LoginResponse> {
  return post<any, LoginRequest, LoginResponse>({
    path: '/api/login',
    body,
    cancelToken,
  });
}
