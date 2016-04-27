import {Component} from 'angular2/core';
import {RouteConfig, ROUTER_DIRECTIVES, ROUTER_PROVIDERS} from 'angular2/router';

@Component({
  selector: 'main',
  template: `
            <h1>Main</h1>
            <a [routerLink]="['Login']">Login</a>
            `,
  directives: [ROUTER_DIRECTIVES]
})
export class Main {}
