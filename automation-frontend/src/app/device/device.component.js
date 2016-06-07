System.register(['angular2/core', '../shared/pipes/capitalize.pipe', '../shared/services/data.service'], function(exports_1) {
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, capitalize_pipe_1, data_service_1;
    var DeviceComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (capitalize_pipe_1_1) {
                capitalize_pipe_1 = capitalize_pipe_1_1;
            },
            function (data_service_1_1) {
                data_service_1 = data_service_1_1;
            }],
        execute: function() {
            DeviceComponent = (function () {
                function DeviceComponent(dataService) {
                    this.dataService = dataService;
                    this.tags = [];
                    this.any = [];
                    this.valueUnit = [];
                }
                DeviceComponent.prototype.ngOnInit = function () {
                    var _this = this;
                    this.dataService.getValue(this.id)
                        .subscribe(function (valueUnit) {
                        //this.valueUnit = valueUnit[0].value;
                        _this.valueUnit = valueUnit.find(function (element, index, array) {
                            return element.deviceId == _this.id;
                        }).value;
                        console.log(_this.valueUnit);
                    });
                };
                __decorate([
                    core_1.Input('id'), 
                    __metadata('design:type', String)
                ], DeviceComponent.prototype, "id", void 0);
                __decorate([
                    core_1.Input('name'), 
                    __metadata('design:type', String)
                ], DeviceComponent.prototype, "name", void 0);
                __decorate([
                    core_1.Input('tags'), 
                    __metadata('design:type', Object)
                ], DeviceComponent.prototype, "tags", void 0);
                DeviceComponent = __decorate([
                    core_1.Component({
                        inputs: ['id', 'name', 'tags'],
                        selector: 'device',
                        providers: [data_service_1.DataService],
                        pipes: [capitalize_pipe_1.CapitalizePipe],
                        template: "\n    <div class=\"card\">\n        <div class=\"card-header\">\n            {{name | capitalize }}\n        </div>\n        \n        <hr>      \n        <div class=\"card-body\">\n            <div class=\"clearfix\">\n            \t<div class=\"large-unit-value\">{{valueUnit.value}}{{valueUnit.unit}}</div>\n    \t    <hr>\n                <div class=\"pull-left card-body-right\" *ngFor=\"#tag of tags\">\n                #{{ tag }}&nbsp;\n                </div>\n            </div>\n        </div>\n\n        <div class=\"card-footer\">\n            <div class=\"clearfix\">\n                <div class=\"pull-right\">\n                    <a href=\"#\" class=\"white\">TREND</a>\n                </div>\n            </div>\n        </div>\n    </div>\n  "
                    }), 
                    __metadata('design:paramtypes', [data_service_1.DataService])
                ], DeviceComponent);
                return DeviceComponent;
            })();
            exports_1("DeviceComponent", DeviceComponent);
        }
    }
});
//# sourceMappingURL=device.component.js.map