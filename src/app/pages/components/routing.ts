import { Routes, RouterModule }  from '@angular/router';

import { Components } from './component';
import { TreeView } from './treeView/component';

// noinspection TypeScriptValidateTypes
const routes: Routes = [
  {
    path: '',
    component: Components,
    children: [
      { path: 'treeview', component: TreeView }
    ]
  }
];

export const routing = RouterModule.forChild(routes);
