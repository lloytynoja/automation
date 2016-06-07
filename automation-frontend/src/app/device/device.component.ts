import { Component, Input } from 'angular2/core';
import { CapitalizePipe } from '../shared/pipes/capitalize.pipe';
import { DataService } from '../shared/services/data.service';

@Component({
	inputs: ['id', 'name', 'tags'],
  	selector: 'device',
	providers: [DataService],
	pipes: [CapitalizePipe],
  	template: `
    <div class="card">
        <div class="card-header">
            {{name | capitalize }}
        </div>
        
        <hr>      
        <div class="card-body">
            <div class="clearfix">
            	<div class="large-unit-value">{{valueUnit.value}}{{valueUnit.unit}}</div>
    	    <hr>
                <div class="pull-left card-body-right" *ngFor="#tag of tags">
                #{{ tag }}&nbsp;
                </div>
            </div>
        </div>

        <div class="card-footer">
            <div class="clearfix">
                <div class="pull-right">
                    <a href="#" class="white">TREND</a>
                </div>
            </div>
        </div>
    </div>
  `  
  //template: `<div class="img-circle large-unit-value">{{value}}{{unit}}</div>`
})
export class DeviceComponent {
  @Input('id') id: string;
  @Input('name') name: string;
  @Input('tags') tags[]: any[];
  valueUnit: any;

  constructor(private dataService: DataService) {
	  this.valueUnit = [];
  }

  ngOnInit() {
	  this.dataService.getValue(this.id)
        .subscribe((valueUnit:any[]) => {
			//this.valueUnit = valueUnit[0].value;
			this.valueUnit = valueUnit.find((element, index, array)
				=> element.deviceId == this.id).value;
        console.log(this.valueUnit)
        });
  }
}  
