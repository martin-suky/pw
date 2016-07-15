import {Login} from "../entity/login";
import {Injectable} from "@angular/core";
import {Cookie} from "ng2-cookies/ng2-cookies";

@Injectable()
export class SessionService {
  private static COOKIE_NAME:string = "Login";

  private _login:Login = null;

  public isLoggedIn() {
    let login:Login;
    return new Promise<boolean>(resolve => {
      if (this._login != null) {
        resolve(true);
      } else if ((login = this.getLoginFromCookie()) != null) {
        this._login = login;
        resolve(true);
      } else {
        resolve(false);  
      }
    });
  }

  public login(login:Login) {
    return new Promise<boolean>(resolve => {
      this._login = login;
      Cookie.set(SessionService.COOKIE_NAME, login.username + ";" + login.password);
      resolve(true);
    });
  }
  
  /**
   * logout
   */
  public logout() {
    this._login = null;
    Cookie.delete(SessionService.COOKIE_NAME);
  }
  
  private getLoginFromCookie():Login {
    let user:string = Cookie.get(SessionService.COOKIE_NAME);
    if (user == null) {
      return null;
    }
    let userArray:string[] = user.split(";");
    let login = new Login;
    login.username = userArray[0];
    login.password = userArray[1];
    return login;
  }
}
