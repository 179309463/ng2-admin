import {Component, ViewEncapsulation} from '@angular/core';

import {ChartistJsService} from './service';

@Component({
  selector: 'chartist-js',
  encapsulation: ViewEncapsulation.None,
  styles: [require('chartist/dist/chartist.css'), require('./style.scss')],
  template: require('./template.html'),
})

export class ChartistJs {

  data:any;

  constructor(private _chartistJsService:ChartistJsService) {
  }

  ngOnInit() {
    this.data = this._chartistJsService.getAll();
  }

  getResponsive(padding, offset) {
    return this._chartistJsService.getResponsive(padding, offset);
  }
}
