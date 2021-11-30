import React from 'react';
import {Theme} from '@styles/theme';
import {createBox} from '@shopify/restyle';

const Box = createBox<Theme>();

export const HorizontalBox = (props: React.ComponentProps<typeof Box>) => {
  return <Box flexDirection="row" {...props} />;
};

export const VerticalBox = Box;
