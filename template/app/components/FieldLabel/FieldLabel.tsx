import React, {forwardRef} from 'react';
import {TextInput as RNTextInput} from 'react-native';
import {Theme} from '@styles/theme';
import {
  VariantProps,
  createRestyleComponent,
  createVariant,
  createText,
  useTheme,
  createBox,
  SpacingProps,
  ColorProps,
  spacing,
  color,
} from '@shopify/restyle';

const Box = createBox<Theme>();
const Text = createText<Theme>();

type BaseTextInputProps = VariantProps<Theme, 'textInputVariants'> &
  React.ComponentProps<typeof RNTextInput> &
  SpacingProps<Theme> &
  ColorProps<Theme>;

export const BaseTextInput = createRestyleComponent<BaseTextInputProps, Theme>(
  [createVariant({themeKey: 'textInputVariants'}), spacing, color],
  RNTextInput,
);

type TextInputProps = BaseTextInputProps & {
  isLoading?: boolean;
  isError?: boolean;
};
export const TextInput = forwardRef<any, TextInputProps>((props, ref) => {
  const {variant, editable = true, isError} = props;
  const theme = useTheme<Theme>();
  const styleLayout = [];
  if (!editable) {
    styleLayout.push({
      borderColor: theme.colors.textInactive,
      borderBottomColor: theme.colors.textInactive,
      backgroundColor: theme.colors.textInputDisabledBackground,
    });
  }
  if (isError) {
    styleLayout.push({
      borderColor: theme.colors.textError,
      borderBottomColor: theme.colors.textError,
    });
  }
  return (
    <BaseTextInput ref={ref} variant={variant} {...props} style={styleLayout} />
  );
});

type TextInputLayoutProps = React.ComponentProps<typeof Box> & {
  label?: string;
  hint?: string;
  error?: string;
  children: React.ReactNode;
};

export const TextInputLayout = forwardRef<any, TextInputLayoutProps>(
  ({label, hint, error, children, ...props}, ref) => {
    return (
      <Box ref={ref} {...props}>
        {!!label && <Text variant="body2">{label}</Text>}
        {children}
        {!!hint && !error && (
          <Text variant="caption" color="textInactive">
            {hint}
          </Text>
        )}
        {!!error && (
          <Text variant="body2" color="textError">
            {error}
          </Text>
        )}
      </Box>
    );
  },
);
