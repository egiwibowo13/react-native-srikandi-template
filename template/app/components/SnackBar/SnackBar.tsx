import React, {useState, useEffect, useImperativeHandle} from 'react';
import {Animated} from 'react-native';
import {Text} from '../Text';
import {BaseButton} from '../Button';
import {createBox, useTheme} from '@shopify/restyle';
import {Theme} from '@styles/theme';
import styles from './SnackBar.styles';
import {noop} from '@utils/index';

const AnimatedBox = createBox<
  Theme,
  React.ComponentProps<typeof Animated.View>
>(Animated.View);

const DEFAULT_HEIGHT = 60;

export type SnackBarActionsParams = {
  text: string;
  buttonText: string;
  type: 'success' | 'error' | 'warning' | 'info';
  duration?: number;
  onPress?: () => void;
};

export type SnackBar = {
  show: (params: SnackBarActionsParams) => void;
};

export const SnackBar = React.forwardRef<SnackBar, any>((props, ref) => {
  const theme = useTheme<Theme>();
  const [visible, setVisible] = useState<boolean>(false);
  const [text, setText] = useState<string>('');
  const [buttonText, setButtonText] = useState<string>('');
  const [onPress, setOnpress] = useState<() => void>(noop);
  const [bgColor, setBgColor] = useState<string>(theme.colors.greyPrimary);

  useImperativeHandle(ref, () => ({
    show: (params: SnackBarActionsParams) => {
      setVisible(true);
      setText(params.text);
      setButtonText(params.buttonText);
      if (params.duration !== undefined) {
        setTimeout(() => {
          setVisible(false);
          setText('');
          setButtonText('');
        }, params.duration);
      }
      if (params.onPress !== undefined) {
        setOnpress(() => params.onPress);
      }
      if (params.type === 'success') {
        setBgColor(theme.colors.success);
      } else if (params.type === 'error') {
        setBgColor(theme.colors.error);
      } else if (params.type === 'warning') {
        setBgColor(theme.colors.warning);
      } else if (params.type === 'info') {
        setBgColor(theme.colors.greyDark);
      }
    },
  }));

  const [animationState] = useState({
    height: new Animated.Value(0),
  });

  useEffect(() => {
    Animated.timing(animationState.height, {
      toValue: visible ? DEFAULT_HEIGHT : 0,
      duration: 150,
      useNativeDriver: false,
    }).start();
  }, [visible]);

  return (
    <AnimatedBox
      backgroundColor="mainForeground"
      paddingHorizontal="m"
      style={[
        {height: animationState.height},
        styles.container,
        {backgroundColor: bgColor},
      ]}>
      <Text variant="body2" color="white" flex={1} alignItems="flex-start">
        {text}
      </Text>
      <BaseButton
        onPress={() => {
          setVisible(false);
          onPress?.();
        }}>
        <Text variant="body2" color="white">
          {buttonText}
        </Text>
      </BaseButton>
    </AnimatedBox>
  );
});

export default SnackBar;
