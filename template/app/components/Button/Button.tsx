import React from 'react';
import {TouchableOpacity, Text, ViewStyle, View, TextStyle} from 'react-native';
import styles from './Button.styles';

export type ButtonProps = {
  title: string;
  onPress: () => void;
  icon?: React.ReactNode;
  containerStyle?: ViewStyle;
  titleStyle?: TextStyle;
  color?: string;
};

export const Button = (props: ButtonProps) => {
  return (
    <TouchableOpacity
      style={[styles.container, props.containerStyle]}
      onPress={props.onPress}>
      <Text style={[styles.title, props.titleStyle]}>{props.title}</Text>
    </TouchableOpacity>
  );
};

export const NudeButton = (props: ButtonProps) => {
  return (
    <TouchableOpacity
      style={[
        {flexDirection: 'row', alignItems: 'center'},
        props.containerStyle,
      ]}
      onPress={props.onPress}>
      {props.icon && <View style={{marginRight: 8}}>{props.icon}</View>}
      <Text style={[styles.nudeTitle, props.titleStyle, {color: props.color}]}>
        {props.title}
      </Text>
    </TouchableOpacity>
  );
};
