import {AppComponent} from "./components/app.component";
import {bootstrap} from "@angular/platform-browser-dynamic";
import {provideForms, disableDeprecatedForms} from "@angular/forms";
import {appRouterProviders} from "./components/app.routes";

bootstrap(AppComponent, [appRouterProviders, disableDeprecatedForms(), provideForms()]);
