import {useNavigation} from '@react-navigation/native';
import {StackNavigationProp} from '@react-navigation/stack';
import {RootStackParamList} from '../../routes/ParamList';

export const UsersNavigator = () => {
  const navigation = useNavigation<StackNavigationProp<RootStackParamList>>();
  function goToUser(id: number) {
    navigation.navigate('User', {id});
  }
  return {
    goToUser,
  };
};
