import {Component} from "@angular/core";
import {MD_TOOLBAR_DIRECTIVES} from "@angular2-material/toolbar/toolbar";
import {MD_BUTTON_DIRECTIVES} from "@angular2-material/button/button";
import {ROUTER_DIRECTIVES} from "@angular/router";

@Component({
  selector: 'top-menu',
  templateUrl: './app/components/top-menu.html',
  directives: [MD_TOOLBAR_DIRECTIVES, MD_BUTTON_DIRECTIVES, ROUTER_DIRECTIVES]
})
export class TopMenu {}
