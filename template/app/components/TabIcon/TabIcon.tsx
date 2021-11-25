import React from 'react';

export interface IconProps {
  fill: string;
  width: number;
  height: number;
}

interface TabIconProps {
  color: string;
  size: number;
  Icon: React.FC<IconProps>;
}

const TabIcon: React.FC<TabIconProps> = ({color, size, Icon}) => {
  return <Icon fill={color} width={size} height={size} />;
};

export default TabIcon;
