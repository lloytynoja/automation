System.register(['angular2/core', 'angular2/router', './services/AuthService', './customers/customers.component', './orders/orders.component', './components/ConfigureComponent', './components/LoginComponent'], function(exports_1) {
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, router_1, AuthService_1, customers_component_1, orders_component_1, ConfigureComponent_1, LoginComponent_1;
    var AppComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
            },
            function (AuthService_1_1) {
                AuthService_1 = AuthService_1_1;
            },
            function (customers_component_1_1) {
                customers_component_1 = customers_component_1_1;
            },
            function (orders_component_1_1) {
                orders_component_1 = orders_component_1_1;
            },
            function (ConfigureComponent_1_1) {
                ConfigureComponent_1 = ConfigureComponent_1_1;
            },
            function (LoginComponent_1_1) {
                LoginComponent_1 = LoginComponent_1_1;
            }],
        execute: function() {
            AppComponent = (function () {
                function AppComponent(router, authService) {
                    this.router = router;
                    this.authService = authService;
                }
                AppComponent = __decorate([
                    core_1.Component({
                        selector: 'app-container',
                        providers: [AuthService_1.AuthService],
                        template: "\n    <nav class=\"navbar navbar-default navbar-fixed-top\">\n      <div class=\"container\">\n        <div class=\"navbar-header\">\n          <button type=\"button\" class=\"navbar-toggle collapsed\" data-toggle=\"collapse\" data-target=\"#navbar\" aria-expanded=\"false\" aria-controls=\"navbar\">\n            <span class=\"sr-only\">Toggle navigation</span>\n            <span class=\"icon-bar\"></span>\n            <span class=\"icon-bar\"></span>\n            <span class=\"icon-bar\"></span>\n          </button>\n          <a class=\"navbar-brand\" href=\"#\">Home automation</a>\n        </div>\n        <div id=\"navbar\" class=\"navbar-collapse collapse\">\n          <ul class=\"nav navbar-nav\">\n\t\t    <li [class.active]=\"router.isRouteActive(router.generate(['Devices']))\">\n\t\t      <a [routerLink]=\"['Devices']\" class=\"item\">Devices</a>\n\t\t    </li>\n          </ul>\n\t\t    <ul class=\"nav navbar-nav navbar-right\">\n\t\t\t\t<li *ngIf=\"authService.isLogged()\" [class.active]=\"router.isRouteActive(router.generate(['Configure']))\">\n\t\t        \t<a [routerLink]=\"['Configure']\" class=\"item\"><span class=\"glyphicon glyphicon-cog\"></span> Configure</a>\n\t\t    \t</li>\n\t\t\t\t<li *ngIf=\"!authService.isLogged()\" [class.active]=\"router.isRouteActive(router.generate(['Login']))\">\n\t\t        \t<a [routerLink]=\"['Login']\" class=\"item\">Log in</a>\n\t\t    \t</li>\n\t\t\t\t<li *ngIf=\"authService.isLogged()\" [class.active]=\"router.isRouteActive(router.generate(['Login']))\">\n                    <a [routerLink]=\"['Devices']\" (click)=\"authService.logout()\">Log out</a>\n\t\t    \t</li>\n            </ul>\n        </div><!--/.nav-collapse -->\n      </div>\n    </nav>\n\n    <div class=\"ui main text container\">\n      <router-outlet></router-outlet>\n    </div>\n\t",
                        directives: [router_1.ROUTER_DIRECTIVES],
                    }),
                    router_1.RouteConfig([
                        { path: '/', as: 'Devices', component: customers_component_1.CustomersComponent, useAsDefault: true },
                        { path: '/configure', as: 'Configure', component: ConfigureComponent_1.ConfigureComponent },
                        { path: '/login', as: 'Login', component: LoginComponent_1.LoginComponent },
                        { path: '/orders/:id', as: 'Orders', component: orders_component_1.OrdersComponent }
                    ]), 
                    __metadata('design:paramtypes', [router_1.Router, AuthService_1.AuthService])
                ], AppComponent);
                return AppComponent;
            })();
            exports_1("AppComponent", AppComponent);
        }
    }
});
//# sourceMappingURL=app.component.js.map