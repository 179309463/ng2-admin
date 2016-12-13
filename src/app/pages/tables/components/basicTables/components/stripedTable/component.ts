import {Component} from '@angular/core';

import {BasicTablesService} from '../../service';

@Component({
  selector: 'striped-table',
  template: require('./template.html')
})
export class StripedTable {

  smartTableData:Array<any>;

  constructor(private _basicTablesService: BasicTablesService) {
    this.smartTableData = _basicTablesService.smartTableData;
  }
}
