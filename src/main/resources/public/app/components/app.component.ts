import {SessionService} from "../services/session-service";
import {ROUTER_DIRECTIVES} from "@angular/router";
import {Component} from "@angular/core";
import { TopMenuComponent } from './top-menu/top-menu.component';

@Component({
  selector: 'pw',
  template: `
      <top-menu></top-menu>
      <router-outlet></router-outlet>
    `,
    directives: [ROUTER_DIRECTIVES, TopMenuComponent],
    providers: [SessionService]
})
export class AppComponent {}
