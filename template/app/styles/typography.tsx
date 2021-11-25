import {StyleSheet} from 'react-native';
import {colorText} from './colors';

const fontConfig = {
  reguler: 'ubuntu-regular',
  medium: 'ubuntu-medium',
  light: 'ubuntu-light',
  thin: 'ubuntu-thin',
};

export const typography = StyleSheet.create({
  headline: {
    color: colorText.midnight,
    fontSize: 24,
    fontFamily: fontConfig.medium,
    lineHeight: 36,
  },
  headline2: {
    color: colorText.midnight,
    fontSize: 20,
    fontFamily: fontConfig.medium,
    lineHeight: 30,
  },
  subtitle: {
    color: colorText.midnight,
    lineHeight: 21,
    fontFamily: fontConfig.medium,
    fontSize: 16,
  },
  subtitle2: {
    color: colorText.midnight,
    lineHeight: 21,
    fontFamily: fontConfig.medium,
    fontSize: 14,
  },
  body: {
    color: colorText.midnight,
    lineHeight: 21,
    fontFamily: fontConfig.medium,
    fontSize: 16,
  },
  body2: {
    color: colorText.midnight,
    lineHeight: 21,
    fontFamily: fontConfig.medium,
    fontSize: 14,
  },
  caption: {
    color: colorText.midnight,
    lineHeight: 18,
    fontFamily: fontConfig.medium,
    fontSize: 12,
  },
  overline: {
    color: colorText.midnight,
    lineHeight: 15,
    fontFamily: fontConfig.medium,
    fontSize: 10,
  },
});

export default typography;
