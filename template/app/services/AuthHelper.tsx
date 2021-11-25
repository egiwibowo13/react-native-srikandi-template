import {Subject} from 'rxjs';

export type AuthParams = {
  isLoggedin: boolean;
};

const subject = new Subject<AuthParams>();

const AuthHelper = {
  loggedin: () => {
    const paramsToSend: AuthParams = {
      isLoggedin: true,
    };
    subject.next(paramsToSend);
  },
  loggedout: () => {
    const paramsToSend: AuthParams = {
      isLoggedin: false,
    };
    subject.next(paramsToSend);
  },
  auth: subject.asObservable(),
};

export default AuthHelper;
