import {RouterConfig, provideRouter} from "@angular/router";
import {LoginForm} from "./login-form";
import {Main} from "./main";

const routes: RouterConfig = [
    {
        path: 'login',
        component: LoginForm
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