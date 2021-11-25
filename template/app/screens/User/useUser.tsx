import {useState, useEffect} from 'react';
import axios from 'axios';
import {UserService} from '@data/api/UserServices';
import NotifyService from '@services/Notify';
import {colorBackground} from '@styles/index';
import {UserNavigator} from './User.navigator';
import {UserView} from './User.model';
import {mapUserToUserView} from './User.mapper';

useUser.dependencies = {
  navigator: UserNavigator,
  userService: UserService,
};

export function useUser() {
  const {navigator, userService} = useUser.dependencies;

  const nav = navigator();
  const {params} = nav;

  const userToken = axios.CancelToken.source();

  const [user, setUser] = useState<UserView>();

  function onPressUser(id: number) {
    nav.goToUser(id);
  }

  async function getUsers() {
    try {
      const result = await userService.getUser(params.id, userToken.token);
      setUser(mapUserToUserView(result));
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
      userToken.cancel();
    };
  }, []);

  return {
    user,
    onPressUser,
  };
}
