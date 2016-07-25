import {RouterConfig, provideRouter} from "@angular/router";
import {LoginFormComponent} from "./login-form/login-form.component";
import {MainComponent} from "./main/main.component";
import {LogoutComponent} from "./logout/logout.component";
import { GasOverviewComponent } from './gas-overview/gas-overview.component';

const routes:RouterConfig = [
    {
        path: 'login',
        component: LoginFormComponent
    },
    {
        path: 'logout',
        component: LogoutComponent
    },
    {
        path: 'main',
        component: MainComponent
    },
    {
        path: 'gas',
        component: GasOverviewComponent
        
    },
    {
        path: '',
        redirectTo: '/main',
        pathMatch: 'full'
    },
]

export const appRouterProviders = [
    provideRouter(routes)
]