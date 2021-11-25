import {StyleSheet} from 'react-native';
import {typography, colorText} from '../../styles';

export default StyleSheet.create({
  label: {
    ...typography.body2,
  },
  error: {
    ...typography.body2,
    color: colorText.error,
  },
});
