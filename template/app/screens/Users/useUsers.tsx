import {useState, useEffect} from 'react';
import axios from 'axios';
import {UserService} from '@data/api/UserServices';
import NotifyService from '@services/Notify';
import {colorBackground} from '@styles/index';
import {UsersNavigator} from './Users.navigator';
import {UserView} from './Users.model';
import {mapUsersToUsersView} from './Users.mapper';

useUsers.dependencies = {
  navigator: UsersNavigator,
  userService: UserService,
};

export function useUsers() {
  const {navigator, userService} = useUsers.dependencies;

  const nav = navigator();

  const usersToken = axios.CancelToken.source();

  const [users, setUsers] = useState<UserView[]>([]);

  function onPressUser(id: number) {
    nav.goToUser(id);
  }

  async function getUsers() {
    try {
      const result = await userService.getUsers({page: 2}, usersToken.token);
      setUsers(mapUsersToUsersView(result.data));
    } catch (error) {
      NotifyService.sendNotify({
        textMessage: 'Silahkan Coba Lagi',
        bgColor: colorBackground.error,
      });
    }
  }

  useEffect(() => {
    getUsers();
    return () => {
      usersToken.cancel();
    };
  }, []);

  return {
    users,
    onPressUser,
  };
}
