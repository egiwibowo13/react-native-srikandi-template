import {StyleSheet} from 'react-native';
import {typography, colorText, colorBackground} from '../../styles';

export default StyleSheet.create({
  container: {
    width: '100%',
    height: 48,
    borderRadius: 5,
    borderWidth: 0.5,
    overflow: 'hidden',
    borderColor: colorBackground.fieldInactive,
    flexDirection: 'row',
  },
  textInput: {
    ...typography.body,
    color: colorText.midnight,
    flex: 1,
    paddingHorizontal: 8,
    height: 48,
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
    textAlignVertical: 'top',
  },
});
