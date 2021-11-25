import {StyleSheet} from 'react-native';
import {typography, colorText, colorBase} from '../../styles';

export default StyleSheet.create({
  container: {
    width: '100%',
    height: 48,
    backgroundColor: colorBase.primary,
    borderRadius: 5,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    ...typography.subtitle,
    color: colorText.white,
  },
  nudeTitle: {
    ...typography.subtitle2,
    color: colorBase.primary,
  },
});
