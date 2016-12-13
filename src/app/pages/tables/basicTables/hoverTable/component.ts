import {Component} from '@angular/core';

import {BasicTablesService} from '../service';

@Component({
  selector: 'hover-table',
  template: require('./template.html')
})
export class HoverTable {

  metricsTableData:Array<any>;

  constructor(private _basicTablesService: BasicTablesService) {
    this.metricsTableData = _basicTablesService.metricsTableData;
  }
}
