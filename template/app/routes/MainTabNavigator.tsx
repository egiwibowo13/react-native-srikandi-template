import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {Text, Icon} from '@components/index';
import {IcHome, IcUsers} from '@assets/svgs';
import {ResponsiveValue} from '@shopify/restyle';
import {Theme} from '@styles/theme';
import {MainTabParamList} from './ParamList';

import Home from '../screens/Home/Home';
import Users from '../screens/Users';

const Tab = createBottomTabNavigator<MainTabParamList>();

const MainTabNavigator = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarActiveTintColor: 'primary',
        tabBarInactiveTintColor: 'textInactive',
      }}>
      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          tabBarIcon: ({color, size}) => {
            return (
              <Icon
                color={color as ResponsiveValue<keyof Theme['colors'], Theme>}
                size={size}
                alignSelf="center"
                Icon={IcHome}
              />
            );
          },
          tabBarLabel: ({color}) => {
            return (
              <Text
                color={color as ResponsiveValue<keyof Theme['colors'], Theme>}
                variant="overline">
                Home
              </Text>
            );
          },
          headerTitle: 'Home',
        }}
      />
      <Tab.Screen
        name="Users"
        component={Users}
        options={{
          tabBarIcon: ({color, size}) => {
            return (
              <Icon
                color={color as ResponsiveValue<keyof Theme['colors'], Theme>}
                size={size}
                alignSelf="center"
                Icon={IcUsers}
              />
            );
          },
          tabBarLabel: ({color}) => {
            return (
              <Text
                color={color as ResponsiveValue<keyof Theme['colors'], Theme>}
                variant="overline">
                Users
              </Text>
            );
          },
          headerTitle: 'My Users',
        }}
      />
    </Tab.Navigator>
  );
};

export default MainTabNavigator;
