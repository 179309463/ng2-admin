import { Routes, RouterModule }  from '@angular/router';

import { Charts } from './component';
import { ChartistJs } from './chartistJs/component';

// noinspection TypeScriptValidateTypes
const routes: Routes = [
  {
    path: '',
    component: Charts,
    children: [
      { path: 'chartist-js', component: ChartistJs }
    ]
  }
];

export const routing = RouterModule.forChild(routes);
