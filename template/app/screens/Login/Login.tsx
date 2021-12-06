import React from 'react';
import {
  BaseScreen,
  Button,
  ScrollableView,
  TextInput,
  TextInputLayout,
} from '@components/index';
import {useLogin, useBasicLogin} from './useLogin';
import styles from './Login.styles';

export const Login = () => {
  const {actions, bind} = useLogin();
  const {onSubmit} = actions;
  const {formLogin, baseScreen} = bind;

  return (
    <BaseScreen style={styles.container} ref={baseScreen}>
      <ScrollableView ref={formLogin.controller}>
        <TextInputLayout
          ref={formLogin.refs?.email}
          label="Email"
          error={formLogin.errors?.email}>
          <TextInput
            variant="outlined"
            value={formLogin.values.email}
            onChangeText={formLogin.handleChange('email')}
            onBlur={() => formLogin.handleBlur('email')}
            isError={!!formLogin.errors?.email}
          />
        </TextInputLayout>
        <TextInputLayout
          ref={formLogin.refs?.password}
          label="Password"
          error={formLogin.errors?.password}>
          <TextInput
            variant="outlined"
            value={formLogin.values.password}
            onChangeText={formLogin.handleChange('password')}
            onBlur={() => formLogin.handleBlur('password')}
            isError={!!formLogin.errors?.password}
          />
        </TextInputLayout>
        <Button
          variant="primary"
          label="Login"
          onPress={() => {
            formLogin.handleSubmit(onSubmit);
          }}
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
      <TextInputLayout label="Email">
        <TextInput
          value={loginRequest.email}
          onChangeText={text => onChangeValue('email', text)}
        />
      </TextInputLayout>
      <TextInputLayout label="Password">
        <TextInput
          value={loginRequest.password}
          onChangeText={text => onChangeValue('password', text)}
        />
      </TextInputLayout>
      <Button label="Login" variant="primary" onPress={onSubmit} />
    </BaseScreen>
  );
};
