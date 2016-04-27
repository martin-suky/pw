import {Component} from 'angular2/core';
import {RouterLink} from 'angular2/router';

@Component({
  selector: 'login',
  template: `
            <h1>Login</h1>
            <a [routerLink]="['Main']">Main</a>
            `,
  directives: [RouterLink]
})
export class Login {}
