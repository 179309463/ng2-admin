import {Component} from '@angular/core';

import {BasicTablesService} from '../../service';

@Component({
  selector: 'condensed-table',
  template: require('./template.html')
})
export class CondensedTable {

  peopleTableData:Array<any>;

  constructor(private _basicTablesService: BasicTablesService) {
    this.peopleTableData = _basicTablesService.peopleTableData;
  }
}
