import React from 'react';
import {
  createRestyleComponent,
  createVariant,
  spacing,
  SpacingProps,
  VariantProps,
  createBox,
} from '@shopify/restyle';
import {Theme} from '@styles/theme';

const Box = createBox<Theme>();

type Props = SpacingProps<Theme> &
  VariantProps<Theme, 'cardVariants'> &
  React.ComponentProps<typeof Box>;
export const Card = createRestyleComponent<Props, Theme>(
  [spacing, createVariant({themeKey: 'cardVariants'})],
  Box,
);

// const Box = createBox<Theme>();
// // const Text = createText<Theme>();

// const Card = createRestyleComponent<
//   VariantProps<Theme, 'cardVariants'> & React.ComponentProps<typeof Box>,
//   Theme
// >([createVariant({themeKey: 'cardVariants'})], Box);

<Card variant="regular" />;
