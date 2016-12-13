import { Routes, RouterModule }  from '@angular/router';

import { Tables } from './component';
import { BasicTables } from './components/basicTables/component';
import { SmartTables } from './components/smartTables/component';

// noinspection TypeScriptValidateTypes
const routes: Routes = [
  {
    path: '',
    component: Tables,
    children: [
      { path: 'basictables', component: BasicTables },
      { path: 'smarttables', component: SmartTables }
    ]
  }
];

export const routing = RouterModule.forChild(routes);
