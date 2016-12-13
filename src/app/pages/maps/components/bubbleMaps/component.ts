import {Component, ViewEncapsulation} from '@angular/core';

import {BubbleMapsService} from './service';

@Component({
  selector: 'bubble-maps',
  encapsulation: ViewEncapsulation.None,
  styles: [require('./style.scss')],
  template: require('./template.html'),
})
export class BubbleMaps {

  chartData:Object;

  constructor(private _bubbleMapsService:BubbleMapsService) {
  }

  ngOnInit() {
    this.chartData = this._bubbleMapsService.getData();
  }
}
