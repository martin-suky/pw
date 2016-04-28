import {Component, OnInit} from 'angular2/core';
import {Router, RouterLink} from 'angular2/router';
import {SessionService} from '../services/session-service';

@Component({
  selector: 'main',
  template: `
            <h1>Main</h1>
            <a [routerLink]="['Login']">Login</a>
            `,
  directives: [RouterLink],
  providers: [SessionService]
})
export class Main implements OnInit {
  constructor(private sessionService:SessionService, private router:Router) {}

  public ngOnInit() {
    this.sessionService.isLoggedIn().then(result => {if (!result) {
        this.router.navigate(['Login']);
    }});
  }
}
