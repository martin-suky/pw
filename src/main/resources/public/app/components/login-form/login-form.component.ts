import {Router} from '@angular/router';
import {Component} from '@angular/core';
import {Login} from '../../entity/login';
import {SessionService} from '../../services/session-service';

@Component({
    moduleId: module.id,
    selector: 'login-form',
    templateUrl: 'login-form.component.html',
})
export class LoginFormComponent {

    login: Login = new Login();

    constructor(private sessionService: SessionService, private router: Router) {
    }

    onSubmit(): void {
        this.sessionService.login(this.login).then(result => {
            if (result) {
                this.router.navigate(['/main']);
            }
        });
    }
}
