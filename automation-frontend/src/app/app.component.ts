import { Component } from 'angular2/core';
import { ROUTER_DIRECTIVES, RouteConfig, Router} from 'angular2/router';
import { AuthService } from './services/AuthService';
import { CustomersComponent } from './customers/customers.component';
import { OrdersComponent } from './orders/orders.component';
import { DevicesComponent } from './devices/devices.component';
import { ConfigureComponent } from './components/ConfigureComponent';
import { LoginComponent } from './components/LoginComponent';

@Component({
	selector: 'app-container',
	providers: [AuthService],
	template: `
    <nav class="navbar navbar-default navbar-fixed-top">
      <div class="container">
        <div class="navbar-header">
          <button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#navbar" aria-expanded="false" aria-controls="navbar">
            <span class="sr-only">Toggle navigation</span>
            <span class="icon-bar"></span>
            <span class="icon-bar"></span>
            <span class="icon-bar"></span>
          </button>
          <a class="navbar-brand" href="#">Home automation</a>
        </div>
        <div id="navbar" class="navbar-collapse collapse">
          <ul class="nav navbar-nav">
		    <li [class.active]="router.isRouteActive(router.generate(['Devices']))">
		      <a [routerLink]="['Devices']" class="item">Devices</a>
		    </li>
          </ul>
		    <ul class="nav navbar-nav navbar-right">
				<li *ngIf="authService.isLogged()" [class.active]="router.isRouteActive(router.generate(['Configure']))">
		        	<a [routerLink]="['Configure']" class="item"><span class="glyphicon glyphicon-cog"></span> Configure</a>
		    	</li>
				<li *ngIf="!authService.isLogged()" [class.active]="router.isRouteActive(router.generate(['Login']))">
		        	<a [routerLink]="['Login']" class="item">Log in</a>
		    	</li>
				<li *ngIf="authService.isLogged()" [class.active]="router.isRouteActive(router.generate(['Login']))">
                    <a [routerLink]="['Devices']" (click)="authService.logout()">Log out</a>
		    	</li>
            </ul>
        </div><!--/.nav-collapse -->
      </div>
    </nav>

    <div class="ui main text container">
      <router-outlet></router-outlet>
    </div>
	`,
  directives: [ROUTER_DIRECTIVES],
})
@RouteConfig([
  { path: '/', as: 'Devices', component: CustomersComponent, useAsDefault: true },
  { path: '/configure', as: 'Configure', component: ConfigureComponent },
  { path: '/login', as: 'Login', component: LoginComponent },
  { path: '/orders/:id', as: 'Orders', component: OrdersComponent }
])
export class AppComponent {
  
	constructor(public router: Router, public authService: AuthService) {
	}

}