import {UserModel} from '@data/model/UserModel';
import {UserView} from './Users.model';

function mapUserToUserView(user: UserModel): UserView {
  return {
    id: user.id,
    email: user.email,
    fullname: `${user.first_name} ${user.last_name}`,
    avatar: user.avatar,
  };
}

export function mapUsersToUsersView(users: UserModel[]): UserView[] {
  return users.map(user => mapUserToUserView(user));
}
