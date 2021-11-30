import React from 'react';
import {
  TouchableOpacity,
  TouchableOpacityProps,
  ActivityIndicator,
  ViewStyle,
  TextStyle,
} from 'react-native';
import {Theme} from '@styles/theme';
import {
  createBox,
  useTheme,
  VariantProps,
  ResponsiveValue,
  createRestyleComponent,
  createVariant,
  spacing,
  layout,
  SpacingProps,
  LayoutProps,
} from '@shopify/restyle';
import {Text} from '../Text';
import {Icon, IconSvgProps} from '../TabIcon';

export const BaseButton = createBox<Theme, TouchableOpacityProps>(
  TouchableOpacity,
);

const ButtonContainer = createRestyleComponent<
  VariantProps<Theme, 'buttonVariants'> &
    SpacingProps<Theme> &
    LayoutProps<Theme> &
    React.ComponentProps<typeof BaseButton>,
  Theme
>([createVariant({themeKey: 'buttonVariants'}), spacing, layout], BaseButton);

type Props = VariantProps<Theme, 'buttonVariants'> &
  React.ComponentProps<typeof BaseButton> & {
    label: string;
    isLoading?: boolean;
    disabled?: boolean;
    containerStyle?: ViewStyle;
    labelStyle?: TextStyle;
    icon?: React.FC<IconSvgProps>;
  };

export const Button = ({
  variant,
  label,
  isLoading,
  disabled,
  containerStyle,
  labelStyle,
  ...props
}: Props) => {
  const theme = useTheme<Theme>();
  let textColor: ResponsiveValue<keyof Theme['colors'], Theme> = 'white';
  let loadingColor = theme.colors.white;
  let styleDisabled = {};

  if (variant === 'primary') {
    textColor = 'white';
    loadingColor = theme.colors.white;
  } else if (variant === 'secondary') {
    textColor = 'textPrimary';
    loadingColor = theme.colors.textPrimary;
  } else if (variant === 'nude') {
    textColor = 'textPrimary';
    loadingColor = theme.colors.textPrimary;
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
        <Icon
          color={textColor}
          size={16}
          Icon={props.icon}
          marginRight="s"
          alignSelf="center"
        />
      )}
      <Text
        variant={'subtitle'}
        color={textColor}
        marginRight={isLoading ? 's' : undefined}
        style={[labelStyle]}>
        {label}
      </Text>
      {isLoading ? <ActivityIndicator color={loadingColor} animating /> : null}
    </ButtonContainer>
  );
};
