/*
 * Angular
 */
import {Component} from 'angular2/core';

/*
 * Services
 */
import {AuthService} from '../services/AuthService';

@Component({
  selector: 'login',
  providers: [AuthService],
  template: `
  <div>
      <div class="container">
          <div class="row toprow">
              <div class="col-md-10 view-switch">

                <div class="alert alert-danger" role="alert" *ngIf="message">
                  {{ message }}
                </div>

                <form class="form-inline" *ngIf="!authService.getUser()">
                  <div class="form-group">
                    <label for="username">User:</label>
                    <input class="form-control" name="username" #username>
                  </div>

                  <div class="form-group">
                    <label for="password">Password:</label>
                    <input class="form-control" type="password" name="password" #password>
                  </div>

                  <a class="btn btn-default" (click)="login(username.value, password.value)">
                    Submit
                  </a>
                </form>

                <div class="well" *ngIf="authService.getUser()">
                  Logged in as <b>{{ authService.getUser() }}</b>
                  <a href (click)="logout()">Log out</a>
                </div>

              </div>
          </div>
      </div>
  </div>

  `
})
export class LoginComponent {
  message: string;

  constructor(public authService: AuthService) {
    this.message = '';
  }

  login(username: string, password: string): boolean {
    this.message = '';
    if (!this.authService.login(username, password)) {
      this.message = 'Incorrect credentials.';
      /* tslint:disable */
      setTimeout(function() {
        this.message = '';
      }.bind(this), 2500);
      /* tslint:enable */
    }
    return false;
  }

  logout(): boolean {
    this.authService.logout();
    return false;
  }
}
