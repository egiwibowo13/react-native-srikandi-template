import {useNavigation} from '@react-navigation/native';
import {StackNavigationProp} from '@react-navigation/stack';
import {RootStackParamList} from '../../routes/ParamList';

export const HomeNavigator = () => {
  const navigation = useNavigation<StackNavigationProp<RootStackParamList>>();

  function goToTasks(categoryId?: string) {
    navigation.navigate('Tasks', {categoryId});
  }
  return {
    goToTasks,
  };
};
