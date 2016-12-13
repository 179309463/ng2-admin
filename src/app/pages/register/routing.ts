import { Routes, RouterModule }  from '@angular/router';

import { Register } from './component';

// noinspection TypeScriptValidateTypes
const routes: Routes = [
  {
    path: '',
    component: Register
  }
];

export const routing = RouterModule.forChild(routes);
