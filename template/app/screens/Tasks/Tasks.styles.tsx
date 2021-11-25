import {StyleSheet} from 'react-native';
import {colorBackground} from '@styles/index';

export default StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: colorBackground.white,
  },
  containerBtnDelete: {
    marginRight: 8,
  },
  containerBtnAddTask: {
    justifyContent: 'flex-end',
    alignSelf: 'flex-end',
    marginTop: 16,
  },
  content: {
    marginTop: 16,
  },
});
