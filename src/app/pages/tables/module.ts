import { NgModule, Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule }  from '@angular/router';
import { NgaModule } from '../../theme/nga.module';

import { BasicTables } from './basicTables/component';
import { SmartTables } from './smartTables/component';
import { Ng2SmartTableModule } from 'ng2-smart-table';
import { BasicTablesService } from './basicTables/service';
import { ResponsiveTable } from './basicTables/responsiveTable/component';
import { StripedTable } from './basicTables/stripedTable/component';
import { BorderedTable } from './basicTables/borderedTable/component';
import { HoverTable } from './basicTables/hoverTable/component';
import { CondensedTable } from './basicTables/condensedTable/component';
import { ContextualTable } from './basicTables/contextualTable/component';
import { SmartTablesService } from './smartTables/service';

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
