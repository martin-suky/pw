import {SessionService} from "../services/session-service";
import {RouterLink, Router} from "@angular/router";
import {Component, OnInit} from "@angular/core";

@Component({
  selector: 'main',
  template: `
            <h1>Main</h1>
            <a [routerLink]="['LoginForm']">Login</a>
            `,
  directives: [RouterLink],
  providers: []
})
export class Main implements OnInit {
  constructor(private sessionService:SessionService, private router:Router) {}

  public ngOnInit() {
    this.sessionService.isLoggedIn().then(result => {if (!result) {
        this.router.navigate(['LoginForm']);
    }});
  }
}
