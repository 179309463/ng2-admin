import {Component} from '@angular/core';

import {BasicTablesService} from '../../service';

@Component({
  selector: 'bordered-table',
  template: require('./template.html'),
})
export class BorderedTable {

  metricsTableData:Array<any>;

  constructor(private _basicTablesService: BasicTablesService) {
    this.metricsTableData = _basicTablesService.metricsTableData;
  }
}
