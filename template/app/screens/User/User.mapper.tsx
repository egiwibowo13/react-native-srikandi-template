import {UserModel} from '@data/model/UserModel';
import {UserView} from './User.model';

export function mapUserToUserView(user: UserModel): UserView {
  return {
    id: user.id,
    email: user.email,
    fullname: `${user.first_name} ${user.last_name}`,
    avatar: user.avatar,
  };
}
