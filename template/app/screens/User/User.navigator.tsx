import {useNavigation, useRoute, RouteProp} from '@react-navigation/native';
import {StackNavigationProp} from '@react-navigation/stack';
import {RootStackParamList} from '../../routes/ParamList';

export const UserNavigator = () => {
  const navigation = useNavigation<StackNavigationProp<RootStackParamList>>();
  const route = useRoute<RouteProp<RootStackParamList, 'User'>>();
  function goToUser(id: number) {
    navigation.navigate('User', {id});
  }
  return {
    goToUser,
    params: route.params,
  };
};
