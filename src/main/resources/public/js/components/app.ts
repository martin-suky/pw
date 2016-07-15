import {LoginForm} from "./login-form";
import {Main} from "./main";
import {SessionService} from "../services/session-service";
import {ROUTER_DIRECTIVES} from "@angular/router";
import {Component} from "@angular/core";

@Component({
  selector: 'pw',
  template: `
    <div>
      <router-outlet></router-outlet>
    </div>
    `,
    directives: [ROUTER_DIRECTIVES],
    providers: [SessionService]
})
export class App {}
