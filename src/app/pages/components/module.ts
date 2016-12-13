import { NgModule }      from '@angular/core';
import { CommonModule }  from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NgaModule } from '../../theme/nga.module';
import { TreeComponent } from 'ng2-tree/index';

import { routing }       from './routing';
import { Components } from './component';
import { TreeView } from './treeView/component';

// TODO: tree component?
@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    NgaModule,
    routing
  ],
  declarations: [
    Components,
    TreeView,
    TreeComponent
  ]
})
export default class ComponentsModule {}
