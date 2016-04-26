import {Component} from 'angular2/core';
import {TopMenu} from './top-menu';

@Component({
  selector: 'pw',
  template: `
    <div>
      <top-menu></top-menu>
    </div>
    `,
    directives: [TopMenu]
})
export class App {}
