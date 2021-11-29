import React from 'react';
import {
  FieldLabel,
  BaseScreen,
  WrapForm,
  Button,
  ScrollableView,
} from '@components/index';
import {useLogin, useBasicLogin} from './useLogin';
import styles from './Login.styles';

export const Login = () => {
  const {onSubmit, formLogin} = useLogin();

  return (
    <BaseScreen style={styles.container}>
      <ScrollableView ref={formLogin.controller}>
        <WrapForm
          ref={formLogin.refs?.email}
          label="Email"
          error={formLogin.errors?.email}
          containerStyle={styles.containerEmail}>
          <FieldLabel
            value={formLogin.values.email}
            onChangeText={formLogin.handleChange('email')}
            onBlur={() => formLogin.handleBlur('email')}
          />
        </WrapForm>
        <WrapForm
          ref={formLogin.refs?.password}
          label="Password"
          error={formLogin.errors?.password}>
          <FieldLabel
            value={formLogin.values.password}
            onChangeText={formLogin.handleChange('password')}
            onBlur={() => formLogin.handleBlur('password')}
          />
        </WrapForm>
        <Button
          variant="primary"
          label="Login"
          onPress={() => formLogin.handleSubmit(onSubmit)}
          marginTop="m"
        />
      </ScrollableView>
    </BaseScreen>
  );
};

export const Basic = () => {
  const {loginRequest, onChangeValue, onSubmit} = useBasicLogin();
  return (
    <BaseScreen style={styles.container}>
      <WrapForm label="Email" containerStyle={styles.containerEmail}>
        <FieldLabel
          value={loginRequest.email}
          onChangeText={text => onChangeValue('email', text)}
        />
      </WrapForm>
      <WrapForm label="Password">
        <FieldLabel
          value={loginRequest.password}
          onChangeText={text => onChangeValue('password', text)}
        />
      </WrapForm>
      <Button label="Login" variant="primary" onPress={onSubmit} />
    </BaseScreen>
  );
};
