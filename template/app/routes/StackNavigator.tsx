import React, {useState, useEffect} from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import AuthHelper from '@services/AuthHelper';
import Login from '../screens/Login';
import {Tasks} from '../screens/Tasks';
import MainTabNavigator from './MainTabNavigator';
import {RootStackParamList} from './ParamList';

import User from '../screens/User';

const Stack = createStackNavigator<RootStackParamList>();

const StackNavigator = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    const auth$ = AuthHelper.auth.subscribe(e => {
      setIsLoggedIn(e.isLoggedin);
    });
    return () => {
      auth$.unsubscribe();
    };
  }, []);
  return (
    <Stack.Navigator>
      {isLoggedIn ? (
        <>
          <Stack.Screen
            options={{
              headerShown: false,
            }}
            name="MainTab"
            component={MainTabNavigator}
          />
          <Stack.Screen name="User" component={User} />
          <Stack.Screen name="Tasks" component={Tasks} />
        </>
      ) : (
        <Stack.Screen name="Login" component={Login} />
      )}
    </Stack.Navigator>
  );
};

export default StackNavigator;
