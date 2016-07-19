import {SessionService} from "../services/session-service";
import {ROUTER_DIRECTIVES} from "@angular/router";
import {Component} from "@angular/core";
import {MATERIAL_PROVIDERS, MdContent} from "ng2-material";

@Component({
  selector: 'pw',
  template: `
    <md-content>
      <router-outlet></router-outlet>
    </md-content>
    `,
    directives: [ROUTER_DIRECTIVES, MdContent],
    providers: [SessionService, MATERIAL_PROVIDERS]
})
export class App {}
