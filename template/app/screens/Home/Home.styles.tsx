import {StyleSheet} from 'react-native';
import {colorBackground, typography} from '@styles/index';

export default StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: colorBackground.white,
  },
  containerBtn: {
    justifyContent: 'flex-end',
    alignSelf: 'flex-end',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
  },
  subTitle: {
    ...typography.subtitle,
    marginTop: 24,
    marginBottom: 16,
  },
  line: {
    height: 1,
    width: '100%',
    backgroundColor: colorBackground.grey,
    marginVertical: 16,
  },
});
