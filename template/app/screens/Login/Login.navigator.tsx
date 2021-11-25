import {useNavigation} from '@react-navigation/native';
import {StackNavigationProp} from '@react-navigation/stack';
import {RootStackParamList} from '../../routes/ParamList';

export const LoginNavigator = () => {
  const navigation = useNavigation<StackNavigationProp<RootStackParamList>>();
  function goToMyApp() {
    navigation.navigate('MainTab', {screen: 'Home'});
  }
  return {
    goToMyApp,
  };
};
