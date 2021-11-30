import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {Icon as TabIcon} from '@components/TabIcon';
import {IcHome, IcUsers} from '@assets/svgs';
import {useTheme} from '@shopify/restyle';
import {Theme} from '@styles/theme';
import {MainTabParamList} from './ParamList';

import Home from '../screens/Home/Home';
import Users from '../screens/Users';

const Tab = createBottomTabNavigator<MainTabParamList>();

const MainTabNavigator = () => {
  const theme = useTheme<Theme>();
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarActiveTintColor: theme.colors.primary,
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
};

export default MainTabNavigator;
