import React from 'react';
import {Text} from 'react-native';
import {BaseScreen} from '@components/index';
import styles from './User.styles';
import {useUser} from './useUser';

export const User = () => {
  const {user} = useUser();
  return (
    <BaseScreen style={styles.container}>
      <Text>User</Text>
      <Text>{user?.fullname}</Text>
    </BaseScreen>
  );
};
