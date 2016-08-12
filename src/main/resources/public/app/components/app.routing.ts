import {Routes, RouterModule} from '@angular/router';
import {MainComponent} from './main/main.component';
import {LogoutComponent} from './logout/logout.component';
import {GasOverviewComponent} from './gas-overview/gas-overview.component';
import {LoginFormComponent} from './login-form/login-form.component';
import {OverviewComponent} from './overview/overview.component';

const routes: Routes = [
    {
        path: 'login',
        component: LoginFormComponent
    },
    {
        path: 'logout',
        component: LogoutComponent
    },
    {
        path: '',
        component: MainComponent,
        children: [
            {
                path: '',
                component: OverviewComponent
            },
            {
                path: 'gas',
                component: GasOverviewComponent
            }
        ]
    },
    {
        path: '',
        redirectTo: '/main',
        pathMatch: 'full'
    },
];

export const appRoutingProviders: any[] = [];

export const routing = RouterModule.forRoot(routes);