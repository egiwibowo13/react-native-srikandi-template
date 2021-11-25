import {CancelToken} from 'axios';
import {get, BaseModel} from '@configs/network/Networking';
import {UserModel, UserPageModel, UserPageRequst} from '../model/UserModel';

export const UserService = {
  getUsers,
  getUser,
};

function getUsers(
  params: UserPageRequst,
  cancelToken?: CancelToken,
): Promise<UserPageModel> {
  return get<any, UserPageModel>({
    path: '/api/users',
    params,
    cancelToken,
  });
}

function getUser(id: number, cancelToken?: CancelToken): Promise<UserModel> {
  return get<any, UserModel>({
    path: `/api/users/${id}`,
    cancelToken,
  });
}

export function getProfile(
  cancelToken?: CancelToken,
): Promise<BaseModel<UserModel>> {
  return get<any, BaseModel<UserModel>>({
    path: '/profile',
    cancelToken,
  });
}
