import {createTheme} from '@shopify/restyle';

const palette = {
  purpleLight: '#8C6FF7',
  purplePrimary: '#5A31F4',
  purpleDark: '#3F22AB',

  greenLight: '#56DCBA',
  greenPrimary: '#0ECD9D',
  greenDark: '#0A906E',

  greyLight: '#EBEFF5',
  greyPrimary: '#C8D0E0',
  greyDark: '#59616E',

  black: '#0B0B0B',
  white: '#FFFFFF', //'#F5F7FA',

  error: '#D42027',
  success: '#4BB543',
  warning: '#FAB005',
  inactive: '#808C92',

  transparent: 'transparent',
};

const theme = createTheme({
  colors: {
    mainBackground: palette.white,
    mainForeground: palette.black,

    primary: palette.purplePrimary,

    cardPrimaryBackground: palette.purplePrimary,

    buttonPrimaryBackground: palette.purplePrimary,
    buttonSecondaryBackground: palette.greyLight,
    buttonDisabledBackground: palette.inactive,

    textInputPrimaryBackground: palette.white,
    textInputDisabledBackground: palette.greyLight,
    textInputBorderColor: palette.greyPrimary,

    textMidnight: palette.black,
    textPrimary: palette.purplePrimary,
    textError: palette.error,
    textInactive: palette.inactive,

    white: palette.white,

    transparent: palette.transparent,
  },
  textVariants: {
    headline: {
      color: 'textMidnight',
      fontSize: 24,
      fontFamily: 'ubuntu-medium',
      lineHeight: 36,
    },
    headline2: {
      color: 'textMidnight',
      fontSize: 20,
      fontFamily: 'ubuntu-medium',
      lineHeight: 30,
    },
    subtitle: {
      color: 'textMidnight',
      lineHeight: 21,
      fontFamily: 'ubuntu-medium',
      fontSize: 16,
    },
    subtitle2: {
      color: 'textMidnight',
      lineHeight: 21,
      fontFamily: 'ubuntu-medium',
      fontSize: 14,
    },
    body: {
      color: 'textMidnight',
      lineHeight: 21,
      fontFamily: 'ubuntu-medium',
      fontSize: 16,
    },
    body2: {
      color: 'textMidnight',
      lineHeight: 21,
      fontFamily: 'ubuntu-medium',
      fontSize: 14,
    },
    caption: {
      color: 'textMidnight',
      lineHeight: 18,
      fontFamily: 'ubuntu-medium',
      fontSize: 12,
    },
    overline: {
      color: 'textMidnight',
      lineHeight: 15,
      fontFamily: 'ubuntu-medium',
      fontSize: 10,
    },
  },
  spacing: {
    xs: 4,
    s: 8,
    m: 16,
    l: 24,
    xl: 40,
  },
  breakpoints: {
    phone: 0,
    tablet: 768,
  },
  cardVariants: {
    defaults: {
      // We can define defaults for the variant here.
      // This will be applied after the defaults passed to createVariant and before the variant defined below.
    },
    regular: {
      // We can refer to other values in the theme here, and use responsive props
      padding: {
        phone: 's',
        tablet: 'm',
      },
    },
    elevated: {
      padding: {
        phone: 's',
        tablet: 'm',
      },
      shadowColor: 'mainForeground',
      shadowOpacity: 0.2,
      shadowOffset: {width: 0, height: 5},
      shadowRadius: 15,
      elevation: 5,
    },
  },
  buttonVariants: {
    defaults: {
      alignSelf: 'flex-start',
      flex: 1,
      width: '100%',
      height: 48,
      borderRadius: 5,
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'center',
      // We can define defaults for the variant here.
      // This will be applied after the defaults passed to createVariant and before the variant defined below.
    },
    primary: {
      backgroundColor: 'buttonPrimaryBackground',
    },
    secondary: {
      backgroundColor: 'buttonSecondaryBackground',
      borderColor: 'buttonPrimaryBackground',
      borderWidth: 1,
      borderRadius: 5,
    },
    nude: {
      width: undefined,
      height: undefined,
      flex: undefined,
      borderRadius: 0,
      backgroundColor: 'transparent',
    },
  },
  textInputVariants: {
    defaults: {
      flex: 1,
      height: 48,
      paddingHorizontal: 's',
      alignItems: 'flex-start',
      justifyContent: 'flex-start',
      textAlignVertical: 'top',
      color: 'textMidnight',
      backgroundColor: 'white',
    },
    outlined: {
      borderWidth: 1,
      borderRadius: 5,
      borderColor: 'textInputBorderColor',
    },
    flat: {
      borderBottomWidth: 1,
      borderRadius: 5,
      borderBottomColor: 'textInputBorderColor',
    },
  },
});

export type Theme = typeof theme;
export default theme;
