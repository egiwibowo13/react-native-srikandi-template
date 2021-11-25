import React from 'react';
import {ViewStyle, View} from 'react-native';
import MessageInfo from '../MessageInfo';
import {colorBackground} from '../../styles';

interface BaseViewProps {
  style?: ViewStyle;
}

export const BaseScreen: React.FC<BaseViewProps> = ({children, style}) => {
  return (
    <View style={[{backgroundColor: colorBackground.bgScreen}, style]}>
      <MessageInfo />
      {children}
    </View>
  );
};
