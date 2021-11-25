import React from 'react';
import {BaseScreen} from '@components/index';
import styles from './Users.styles';
import {useUsers} from './useUsers';
import {CardUser} from './contents/CardUser';

export const Users = () => {
  const {users, onPressUser} = useUsers();
  return (
    <BaseScreen style={styles.container}>
      {users.map((user, index) => {
        return (
          <CardUser
            key={index}
            user={user}
            onPress={() => onPressUser(user.id)}
          />
        );
      })}
    </BaseScreen>
  );
};
