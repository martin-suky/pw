import {RouterConfig, provideRouter} from "@angular/router";
import {LoginForm} from "./login-form";
import {Main} from "./main";
import {Logout} from "./logout";

const routes:RouterConfig = [
    {
        path: 'login',
        component: LoginForm
    },
    {
        path: 'logout',
        component: Logout
    },
    {
        path: 'main',
        component: Main
    },
    {
        path: '',
        redirectTo: '/main',
        pathMatch: 'full'
    }
]

export const appRouterProviders = [
    provideRouter(routes)
]