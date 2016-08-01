import {SessionService} from "../../services/session-service";
import {Router, ROUTER_DIRECTIVES} from "@angular/router";
import {Component, OnInit} from "@angular/core";

@Component({
  selector: 'main',
  templateUrl: './app/components/main/main.component.html',
  directives: [ROUTER_DIRECTIVES],
  providers: []
})
export class MainComponent implements OnInit {
  constructor(private sessionService:SessionService, private router:Router) {}

  public ngOnInit() {
    this.sessionService.isLoggedIn().then(result => {if (!result) {
        this.router.navigate(['/login']);
    }});
  }
}
