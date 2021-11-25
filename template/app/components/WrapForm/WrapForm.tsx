import React from 'react';
import PropTypes from 'prop-types';
import {View, Text, ViewStyle} from 'react-native';
import styles from './WrapForm.styles';

export type WrapFormProps = {
  label?: string;
  error?: string;
  children: React.ReactNode;
  visibility?: boolean;
  optional?: boolean;
  containerStyle?: ViewStyle;
};

export type WrapFormRef = {
  wrapFormRef?: any;
};

export const WrapForm = React.forwardRef<any, WrapFormProps>((props, ref) => {
  const {label, children, error, visibility = true, containerStyle} = props;
  if (!visibility) {
    return null;
  }
  return (
    <View ref={ref} style={containerStyle}>
      <Text style={styles.label}>{label}</Text>
      {children}
      {!!error && <Text style={styles.error}>{error}</Text>}
    </View>
  );
});

WrapForm.propTypes = {
  label: PropTypes.string,
  children: PropTypes.node,
  error: PropTypes.string,
  visibility: PropTypes.bool,
  optional: PropTypes.bool,
  containerStyle: PropTypes.object,
};

WrapForm.defaultProps = {
  visibility: true,
  optional: false,
};
