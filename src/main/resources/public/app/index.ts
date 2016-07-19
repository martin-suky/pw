import {App} from "./components/app";
import {bootstrap} from "@angular/platform-browser-dynamic";
import {provideForms, disableDeprecatedForms} from "@angular/forms";
import {appRouterProviders} from "./components/app.routes";

bootstrap(App, [appRouterProviders, disableDeprecatedForms(), provideForms()]);
