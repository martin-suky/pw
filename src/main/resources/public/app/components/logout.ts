import {Component, OnInit} from "@angular/core";
import {Router} from "@angular/router";
import {SessionService} from "../services/session-service";

@Component({
    template: ''
})
export class Logout implements OnInit{

    constructor(private router:Router, private sessionService:SessionService) {

    }

    ngOnInit():any {
        this.sessionService.logout();
        this.router.navigate(["/main"]);
    }

}