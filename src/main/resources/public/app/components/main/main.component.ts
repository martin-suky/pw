import {SessionService} from '../../services/session-service';
import {Router} from '@angular/router';
import {Component, OnInit} from '@angular/core';

@Component({
  moduleId: module.id,
  selector: 'main',
  templateUrl: 'main.component.html',
})
export class MainComponent implements OnInit {
  constructor(private sessionService: SessionService, private router: Router) {}

  public ngOnInit() {
    this.sessionService.isLoggedIn().then(result => {if (!result) {
        this.router.navigate(['/login']);
    }});
  }
}
