import {SessionService} from '../services/session-service';
import {Login} from '../entity/login';
import {RouterLink, Router} from "@angular/router";
import {Component} from "@angular/core";

@Component({
  selector: 'login-form',
  templateUrl: './app/components/',
  directives: [RouterLink]
})
export class LoginForm {

  login:Login = new Login();

  constructor(private sessionService:SessionService, private router:Router) {}

  onSubmit():void {
    this.sessionService.login(this.login).then(result => {if (result) {
        this.router.navigate(['/main']);
      }
    });
  }
}
