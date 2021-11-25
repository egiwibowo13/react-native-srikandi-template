import {StyleSheet, Dimensions} from 'react-native';

import {
  colorText,
  colorBackground,
  typography,
  spacing,
} from '../../styles/index';

const WIDTH = Dimensions.get('window').width;

export default StyleSheet.create({
  container: {
    alignItems: 'center',
    position: 'absolute',
    bottom: 0,
    flexDirection: 'row',
    width: WIDTH,
    paddingHorizontal: spacing.horizontal,
    shadowOpacity: 0.8,
    shadowRadius: 3,
    shadowColor: colorBackground.blackout,
    shadowOffset: {height: 0, width: 0},
    elevation: 10,
    backgroundColor: colorBackground.blackout,
    zIndex: 10,
  },
  textStatusContainer: {
    paddingHorizontal: spacing.samll,
    paddingVertical: spacing.xSmall,
    borderRadius: 50,
  },
  textStatusStyle: {
    ...typography.body2,
    color: colorText.inactive,
  },
  textMessageContainer: {
    flex: 2,
    alignItems: 'flex-start',
  },
  textMessage: {
    ...typography.body2,
    color: colorText.white,
  },
  cbText: {
    ...typography.body2,
    color: colorText.inactive,
    fontWeight: '600',
  },
});
