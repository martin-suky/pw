import {NgModule} from '@angular/core';
import {AppComponent} from './app.component';
import {BrowserModule} from '@angular/platform-browser';
import {FormsModule} from '@angular/forms';
import {routing} from './app.routing';
import {TopMenuComponent} from './top-menu/top-menu.component';
import {LoginFormComponent} from './login-form/login-form.component';
import {LogoutComponent} from './logout/logout.component';
import {MainComponent} from './main/main.component';
import {GasOverviewComponent} from './gas-overview/gas-overview.component';
import {SessionService} from '../services/session-service';
import {OverviewComponent} from './overview/overview.component';

@NgModule({
    imports: [
        BrowserModule,
        FormsModule,
        routing
    ],
    declarations: [
        AppComponent,
        GasOverviewComponent,
        LoginFormComponent,
        LogoutComponent,
        MainComponent,
        OverviewComponent,
        TopMenuComponent
    ],
    providers: [
        SessionService
    ],
    bootstrap: [
        AppComponent
    ]
})
export class AppModule {
}
