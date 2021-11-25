import React from 'react';
import {View, TextInputProps, TextInput, ViewStyle} from 'react-native';
import styles from './FieldLabel.styles';

export const FieldLabel = React.forwardRef<
  TextInput,
  TextInputProps & {containerStyle?: ViewStyle}
>((props, ref) => {
  return (
    <View style={[styles.container, props.containerStyle]}>
      <TextInput ref={ref} {...props} style={[styles.textInput, props.style]} />
    </View>
  );
});
