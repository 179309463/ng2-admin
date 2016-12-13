import { NgModule, Component}      from '@angular/core';
import { CommonModule }  from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule }  from '@angular/router';
import { NgaModule } from '../../theme/nga.module';
import { TreeComponent } from 'ng2-tree/index';

import { Tree } from './tree/component';

@Component({
  selector: 'components',
  styles: [],
  template: `<router-outlet></router-outlet>`
})
class Components {}

const routing = RouterModule.forChild([
  {
    path: '',
    component: Components,
    children: [
      { path: 'tree', component: Tree }
    ]
  }
]);

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
    Tree,
    TreeComponent
  ]
})
export default class ComponentsModule {}
