import {SessionService} from "../services/session-service";
import {Router, ROUTER_DIRECTIVES} from "@angular/router";
import {Component, OnInit} from "@angular/core";
import {TopMenu} from "./top-menu";

@Component({
  selector: 'main',
  templateUrl: './app/components/main.html',
  directives: [ROUTER_DIRECTIVES, TopMenu],
  providers: []
})
export class Main implements OnInit {
  constructor(private sessionService:SessionService, private router:Router) {}

  public ngOnInit() {
    this.sessionService.isLoggedIn().then(result => {if (!result) {
        this.router.navigate(['/login']);
    }});
  }
}
