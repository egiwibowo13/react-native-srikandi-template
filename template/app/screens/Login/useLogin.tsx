import {useState, useEffect} from 'react';
import axios from 'axios';
import {LoginRequest} from '@data/model/LoginModel';
import NotifyService from '@services/Notify';
import AuthHelper from '@services/AuthHelper';
import {colorBackground} from '@styles/index';
import {AuthUseCase} from '@domain/AuthUseCase';
import {LoginNavigator} from './Login.navigator';
import {loginSchema} from './Login.model';
import {useForm, SubmitParams} from '@components/index';

useLogin.dependencies = {
  navigator: LoginNavigator,
  authUseCase: AuthUseCase,
};

export function useLogin() {
  const {authUseCase} = useLogin.dependencies;

  const loginToken = axios.CancelToken.source();

  const formLogin = useForm<LoginRequest>({
    initialValues: {
      email: '',
      password: '',
    },
    autoscroll: true,
    validationSchema: loginSchema,
  });

  async function onSubmit(params: SubmitParams<LoginRequest>) {
    // AuthHelper.loggedin();
    if (params.isValid) {
      try {
        await authUseCase.login(params.values, loginToken.token);
        AuthHelper.loggedin();
      } catch (error) {
        console.log({error});
        NotifyService.sendNotify({
          textMessage: 'Silahkan Coba Lagi',
          bgColor: colorBackground.error,
        });
      }
    }
  }

  useEffect(() => {
    return () => {
      loginToken.cancel();
    };
  }, [loginToken]);

  return {
    formLogin,
    onSubmit,
  };
}

useBasicLogin.dependencies = {
  authUseCase: AuthUseCase,
};

export function useBasicLogin() {
  const {authUseCase} = useLogin.dependencies;
  const loginToken = axios.CancelToken.source();
  const [loginRequest, setLoginRequest] = useState<LoginRequest>({
    email: '',
    password: '',
  });

  function onChangeValue(fieldName: keyof LoginRequest, text: string) {
    setLoginRequest(prev => ({...prev, [fieldName]: text}));
  }

  async function onSubmit() {
    try {
      await authUseCase.login(loginRequest, loginToken.token);
      AuthHelper.loggedin();
    } catch (error) {
      console.log({error});
      NotifyService.sendNotify({
        textMessage: 'Silahkan Coba Lagi',
        bgColor: colorBackground.error,
      });
    }
  }

  useEffect(() => {
    return () => {
      loginToken.cancel();
    };
  }, [loginToken]);

  return {
    loginRequest,
    onSubmit,
    onChangeValue,
  };
}
