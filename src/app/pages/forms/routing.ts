import { Routes, RouterModule }  from '@angular/router';

import { Forms } from './component';
import { Inputs } from './components/inputs/component';
import { Layouts } from './components/layouts/component';

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
