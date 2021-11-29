import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {Icon as TabIcon} from '@components/TabIcon';
import {IcHome, IcUsers} from '@assets/svgs';
import {MainTabParamList} from './ParamList';

import Home from '../screens/Home/Home';
import Users from '../screens/Users';

const Tab = createBottomTabNavigator<MainTabParamList>();

const MainTabNavigator = () => (
  <Tab.Navigator
    screenOptions={{
      tabBarActiveTintColor: '#e91e63',
    }}>
    <Tab.Screen
      name="Home"
      component={Home}
      options={{
        tabBarIcon: ({color, size}) => {
          return <TabIcon color={color} size={size} Icon={IcHome} />;
        },
        headerTitle: 'Home',
      }}
    />
    <Tab.Screen
      name="Users"
      component={Users}
      options={{
        tabBarIcon: ({color, size}) => {
          return <TabIcon color={color} size={size} Icon={IcUsers} />;
        },
        headerTitle: 'My Users',
      }}
    />
  </Tab.Navigator>
);

export default MainTabNavigator;
