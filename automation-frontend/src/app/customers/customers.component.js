System.register(['angular2/core', 'angular2/router', '../device/device.component', '../shared/services/data.service', '../shared/sorter', './filterTextbox.component', '../shared/directives/sortby.directive', '../shared/pipes/capitalize.pipe', '../shared/pipes/trim.pipe'], function(exports_1) {
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, router_1, device_component_1, data_service_1, sorter_1, filterTextbox_component_1, sortby_directive_1, capitalize_pipe_1, trim_pipe_1;
    var CustomersComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
            },
            function (device_component_1_1) {
                device_component_1 = device_component_1_1;
            },
            function (data_service_1_1) {
                data_service_1 = data_service_1_1;
            },
            function (sorter_1_1) {
                sorter_1 = sorter_1_1;
            },
            function (filterTextbox_component_1_1) {
                filterTextbox_component_1 = filterTextbox_component_1_1;
            },
            function (sortby_directive_1_1) {
                sortby_directive_1 = sortby_directive_1_1;
            },
            function (capitalize_pipe_1_1) {
                capitalize_pipe_1 = capitalize_pipe_1_1;
            },
            function (trim_pipe_1_1) {
                trim_pipe_1 = trim_pipe_1_1;
            }],
        execute: function() {
            CustomersComponent = (function () {
                function CustomersComponent(dataService) {
                    this.dataService = dataService;
                    this.customers = [];
                    this.values = [];
                    this.filteredCustomers = [];
                    this.value = 10;
                    this.unit = "V";
                }
                CustomersComponent.prototype.ngOnInit = function () {
                    var _this = this;
                    this.title = 'Customers';
                    this.filterText = 'Filter Customers:';
                    this.listDisplayModeEnabled = false;
                    this.dataService.getCustomers()
                        .subscribe(function (customers) {
                        _this.customers = _this.filteredCustomers = customers;
                    });
                    this.sorter = new sorter_1.Sorter();
                };
                CustomersComponent.prototype.changeDisplayMode = function (mode) {
                    this.listDisplayModeEnabled = (mode === 'List');
                };
                CustomersComponent.prototype.filterChanged = function (data) {
                    if (data && this.customers) {
                        data = data.toUpperCase();
                        var props = ['name'];
                        var filtered = this.customers.filter(function (item) {
                            var match = false;
                            for (var _i = 0; _i < props.length; _i++) {
                                var prop = props[_i];
                                //console.log(item[prop] + ' ' + item[prop].toUpperCase().indexOf(data));
                                if (item[prop].toString().toUpperCase().indexOf(data) > -1) {
                                    match = true;
                                    break;
                                }
                            }
                            ;
                            for (var _a = 0, _b = item.tags; _a < _b.length; _a++) {
                                var tag = _b[_a];
                                if (tag.toUpperCase().indexOf(data) > -1) {
                                    match = true;
                                    break;
                                }
                            }
                            return match;
                        });
                        this.filteredCustomers = filtered;
                    }
                    else {
                        this.filteredCustomers = this.customers;
                    }
                };
                CustomersComponent.prototype.deleteCustomer = function (id) {
                };
                CustomersComponent.prototype.sort = function (prop) {
                    //Check for complex type such as 'state.name'
                    if (prop && prop.indexOf('.')) {
                    }
                    this.sorter.sort(this.filteredCustomers, prop);
                };
                CustomersComponent = __decorate([
                    core_1.Component({
                        selector: 'customers',
                        providers: [data_service_1.DataService],
                        templateUrl: 'app/customers/customers.component.html',
                        directives: [router_1.RouterLink, filterTextbox_component_1.FilterTextboxComponent, sortby_directive_1.SortByDirective, device_component_1.DeviceComponent],
                        pipes: [capitalize_pipe_1.CapitalizePipe, trim_pipe_1.TrimPipe]
                    }), 
                    __metadata('design:paramtypes', [data_service_1.DataService])
                ], CustomersComponent);
                return CustomersComponent;
            })();
            exports_1("CustomersComponent", CustomersComponent);
        }
    }
});
//# sourceMappingURL=customers.component.js.map