System.register(['angular2/core', 'angular2/router', '../shared/services/data.service'], function(exports_1) {
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, router_1, data_service_1;
    var DevicesComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
            },
            function (data_service_1_1) {
                data_service_1 = data_service_1_1;
            }],
        execute: function() {
            DevicesComponent = (function () {
                function DevicesComponent(dataService, _routeParams) {
                    this.dataService = dataService;
                    this._routeParams = _routeParams;
                    this.title = 'Orders';
                    this.filteredOrders = [];
                }
                DevicesComponent.prototype.ngOnInit = function () {
                    var _this = this;
                    var customerId = parseInt(this._routeParams.get('id'), 10);
                    this.dataService.getOrders().subscribe(function (orders) {
                        _this.filteredOrders = orders.filter(function (order) { return order.customerId === customerId; });
                    });
                };
                DevicesComponent = __decorate([
                    core_1.Component({
                        selector: 'devices',
                        providers: [data_service_1.DataService],
                        templateUrl: 'app/devices/devices.component.html',
                        directives: [router_1.RouterLink]
                    }), 
                    __metadata('design:paramtypes', [data_service_1.DataService, router_1.RouteParams])
                ], DevicesComponent);
                return DevicesComponent;
            })();
            exports_1("DevicesComponent", DevicesComponent);
        }
    }
});
//# sourceMappingURL=devices.component.js.map