import {SessionService} from '../services/session-service';
import {Login} from '../entity/login';
import {RouterLink, Router} from "@angular/router";
import {Component} from "@angular/core";

@Component({
  selector: 'login-form',
  template: `
            <div class="container">

              <form class="form-signin" (ngSubmit)="onSubmit()">
                <h2 class="form-signin-heading">Please sign in</h2>
                <label for="inputEmail" class="sr-only">Email address</label>
                <input [(ngModel)]="login.username" type="email" id="inputEmail" class="form-control" placeholder="Email address" required autofocus>
                <label for="inputPassword" class="sr-only">Password</label>
                <input [(ngModel)]="login.password" type="password" id="inputPassword" class="form-control" placeholder="Password" required>
                <div class="checkbox">
                  <label>
                    <input type="checkbox" value="remember-me"> Remember me
                  </label>
                </div>
                <button class="btn btn-lg btn-primary btn-block" type="submit">Sign in</button>
              </form>

            </div>
            `,
  directives: [RouterLink]
})
export class LoginForm {

  login:Login = new Login();

  constructor(private sessionService:SessionService, private router:Router) {}

  onSubmit():void {
    this.sessionService.login(this.login).then(result => {if (result) {
        this.router.navigate(['Main']);
      }
    });
  }
}
