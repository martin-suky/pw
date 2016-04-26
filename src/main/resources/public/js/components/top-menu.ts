import {Component} from 'angular2/core';

@Component({
  selector: 'top-menu',
  template: `
            <nav class="navbar navbar-inverse navbar-fixed-top">
              <div class="container-fluid">
                <div class="navbar-header">
                  <a class="navbar-brand" href="#">About</a>
                </div>
                <div id="navbar" class="navbar-collapse collapse">
                  <ul class="nav navbar-nav navbar-right">
                    <li><a href="#">About</a></li>
                    <li><a href="#">Settings</a></li>
                    <li><a href="#">Profile</a></li>
                    <li><a href="#">Help</a></li>
                  </ul>
                  <form class="navbar-form navbar-right">
                    <input type="text" class="form-control" placeholder="Search..." />
                  </form>
                </div>
              </div>
            </nav>
            `
})
export class TopMenu {}
