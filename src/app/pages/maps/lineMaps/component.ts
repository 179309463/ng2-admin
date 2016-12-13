import {Component, ViewEncapsulation} from '@angular/core';

import {LineMapsService} from './service';

@Component({
  selector: 'line-maps',
  encapsulation: ViewEncapsulation.None,
  styles: [require('./style.scss')],
  template: require('./template.html')
})
export class LineMaps {

  chartData:Object;

  constructor(private _lineMapsService:LineMapsService) {
    this.chartData = this._lineMapsService.getData();
  }
}
