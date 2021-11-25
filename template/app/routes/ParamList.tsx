import {NavigatorScreenParams} from '@react-navigation/native';

export type MainTabParamList = {
  Home: undefined;
  Users: undefined;
};

export type RootStackParamList = {
  MainTab: NavigatorScreenParams<MainTabParamList>;
  User: {id: number};
  Login: undefined;
  Tasks: {categoryId?: string};
};
