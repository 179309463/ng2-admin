import { Routes, RouterModule }  from '@angular/router';

import { Forms } from './component';
import { Inputs } from './inputs/component';
import { Layouts } from './layouts/component';

// noinspection TypeScriptValidateTypes
const routes: Routes = [
  {
    path: '',
    component: Forms,
    children: [
      { path: 'inputs', component: Inputs },
      { path: 'layouts', component: Layouts }
    ]
  }
];

export const routing = RouterModule.forChild(routes);
