import React from 'react';
import {
  TouchableOpacity,
  TouchableOpacityProps,
  ActivityIndicator,
  ViewStyle,
  View,
} from 'react-native';
import {Theme} from '@styles/theme';
import {
  createBox,
  useTheme,
  VariantProps,
  ResponsiveValue,
  createRestyleComponent,
  createVariant,
} from '@shopify/restyle';
import {Text} from '../Text';
import {Icon, IconProps} from '../TabIcon';
import styles from './Button.styles';

const BaseButton = createBox<Theme, TouchableOpacityProps>(TouchableOpacity);

const ButtonContainer = createRestyleComponent<
  VariantProps<Theme, 'buttonVariants'> &
    React.ComponentProps<typeof BaseButton>,
  Theme
>([createVariant({themeKey: 'buttonVariants'})], BaseButton);

type Props = VariantProps<Theme, 'buttonVariants'> &
  React.ComponentProps<typeof BaseButton> & {
    label: string;
    isLoading?: boolean;
    disabled?: boolean;
    containerStyle?: ViewStyle;
    icon?: React.FC<IconProps>;
  };

export const Button = ({
  variant,
  label,
  isLoading,
  disabled,
  containerStyle,
  ...props
}: Props) => {
  const theme = useTheme<Theme>();
  let textColor: ResponsiveValue<keyof Theme['colors'], Theme> = 'white';
  let loadingColor = theme.colors.textPrimary;
  let styleDisabled = {};

  if (variant === 'primary') {
    textColor = 'white';
    loadingColor = theme.colors.white;
  } else if (variant === 'secondary') {
    textColor = 'textPrimary';
    loadingColor = theme.colors.textPrimary;
  } else if (variant === 'nude') {
    textColor = 'textPrimary';
  }
  if (disabled) {
    textColor = 'white';
    loadingColor = theme.colors.white;
    styleDisabled = {
      backgroundColor: theme.colors.buttonDisabledBackground,
      borderWidth: 0,
    };
  }

  return (
    <ButtonContainer
      variant={variant}
      style={[styleDisabled, containerStyle]}
      {...props}>
      {props.icon && (
        <View style={{marginRight: 8}}>
          <Icon color={loadingColor} size={16} Icon={props.icon} />
        </View>
      )}
      <Text
        variant={'subtitle'}
        color={textColor}
        marginRight={isLoading ? 's' : undefined}
        style={styles.text}>
        {label}
      </Text>
      {isLoading ? <ActivityIndicator color={loadingColor} animating /> : null}
    </ButtonContainer>
  );
};
