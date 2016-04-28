import {Injectable} from 'angular2/core';

import {Login} from '../entity/Login';

@Injectable()
export class SessionService {

  private _login:Login = null;

  public isLoggedIn() {
    return new Promise<boolean>(resolve => {
      resolve(this._login != null);
    });
  }

  public login(username:string, password:string) {
    return new Promise<boolean>(resolve => {
      this._login = new Login();
      this._login.login = username;
      this._login.password = password;
      resolve(true);
    });
  }
}
