import {useNavigation, useRoute, RouteProp} from '@react-navigation/native';
import {StackNavigationProp} from '@react-navigation/stack';
import {RootStackParamList} from '../../routes/ParamList';

export const TasksNavigator = () => {
  const navigation = useNavigation<StackNavigationProp<RootStackParamList>>();
  const route = useRoute<RouteProp<RootStackParamList, 'Tasks'>>();

  function goBack() {
    navigation.goBack();
  }
  return {
    navigation,
    params: route.params,
    goBack,
  };
};
