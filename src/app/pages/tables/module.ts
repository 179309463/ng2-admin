import { NgModule }      from '@angular/core';
import { CommonModule }  from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NgaModule } from '../../theme/nga.module';

import { routing }       from './routing';
import { Tables } from './component';
import { BasicTables } from './components/basicTables/component';
import { SmartTables } from './components/smartTables/component';
import { Ng2SmartTableModule } from 'ng2-smart-table';
import { BasicTablesService } from './components/basicTables/service';
import { ResponsiveTable } from './components/basicTables/components/responsiveTable/component';
import { StripedTable } from './components/basicTables/components/stripedTable/component';
import { BorderedTable } from './components/basicTables/components/borderedTable/component';
import { HoverTable } from './components/basicTables/components/hoverTable/component';
import { CondensedTable } from './components/basicTables/components/condensedTable/component';
import { ContextualTable } from './components/basicTables/components/contextualTable/component';
import { SmartTablesService } from './components/smartTables/service';


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
