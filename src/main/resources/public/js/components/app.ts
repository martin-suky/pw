import {Component} from 'angular2/core';
import {RouteConfig, ROUTER_DIRECTIVES, ROUTER_PROVIDERS} from 'angular2/router';
import {TopMenu} from './top-menu';
import {LoginForm} from './login-form';
import {Main} from './main';

import {SessionService} from '../services/session-service';

@Component({
  selector: 'pw',
  template: `
    <div>
      <router-outlet></router-outlet>
    </div>
    `,
    directives: [ROUTER_DIRECTIVES],
    providers: [ROUTER_PROVIDERS, SessionService]
})
@RouteConfig([
  {
    path: '/login',
    name: 'LoginForm',
    component: LoginForm
  },
  {
    path: '/main',
    name: 'Main',
    component: Main,
    useAsDefault: true
  }
])
export class App {}
