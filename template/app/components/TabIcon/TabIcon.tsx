import React from 'react';
import {TouchableOpacityProps, TouchableOpacity} from 'react-native';
import {Theme} from '@styles/theme';
import {
  createBox,
  spacing,
  ColorProps,
  useRestyle,
  color,
  useTheme,
} from '@shopify/restyle';

const BaseButton = createBox<Theme, TouchableOpacityProps>(TouchableOpacity);

export interface IconSvgProps {
  fill: any;
  width: number;
  height: number;
}

type IconProps = React.ComponentProps<typeof BaseButton> &
  ColorProps<Theme> & {
    onPress?: () => void;
    size: number;
    Icon: React.FC<IconSvgProps>;
  };

export const Icon: React.FC<IconProps> = ({
  size,
  Icon: IconSvg,
  onPress,
  ...rest
}) => {
  const restyleProps: any = useRestyle([color, spacing], rest);
  const theme = useTheme<Theme>();
  const getFill = () => {
    if (restyleProps.style !== undefined && restyleProps?.style?.length > 0) {
      return restyleProps.style[0].color;
    } else {
      return theme.colors.primary;
    }
  };
  return (
    <BaseButton
      disabled={typeof onPress !== 'function'}
      onPress={onPress}
      alignSelf="flex-start"
      {...restyleProps}>
      <IconSvg fill={getFill()} width={size} height={size} />
    </BaseButton>
  );
};

export default Icon;
