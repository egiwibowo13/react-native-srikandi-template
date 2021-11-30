import React from 'react';
import {createText, layout, LayoutProps, useRestyle} from '@shopify/restyle';
import {Theme} from '@styles/theme';

export const BaseText = createText<Theme>();

type Props = React.ComponentProps<typeof BaseText> & LayoutProps<Theme>;

export const Text = (props: Props) => {
  const propsRestyle = useRestyle([layout], props);
  return <BaseText {...propsRestyle} />;
};
