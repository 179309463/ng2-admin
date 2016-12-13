import { NgModule, Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule }  from '@angular/router';
import { NgaModule } from '../../theme/nga.module';

import { BasicTables } from './basic/component';
import { SmartTables } from './smart/component';
import { Ng2SmartTableModule } from 'ng2-smart-table';
import { BasicTablesService } from './basic/service';
import { ResponsiveTable } from './basic/responsiveTable/component';
import { StripedTable } from './basic/stripedTable/component';
import { BorderedTable } from './basic/borderedTable/component';
import { HoverTable } from './basic/hoverTable/component';
import { CondensedTable } from './basic/condensedTable/component';
import { ContextualTable } from './basic/contextualTable/component';
import { SmartTablesService } from './smart/service';

@Component({
  selector: 'forms',
  styles: [],
  template: `<router-outlet></router-outlet>`
})
class Tables {}

const routing = RouterModule.forChild([
  {
    path: '',
    component: Tables,
    children: [
      { path: 'basictables', component: BasicTables },
      { path: 'smarttables', component: SmartTables }
    ]
  }
]);

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    NgaModule,
    Ng2SmartTableModule,
    routing
  ],
  declarations: [
    Tables,
    BasicTables,
    SmartTables,
    HoverTable,
    BorderedTable,
    CondensedTable,
    StripedTable,
    ContextualTable,
    ResponsiveTable
  ],
  providers: [
    BasicTablesService,
    SmartTablesService
  ]
})
export default class TablesModule {}
