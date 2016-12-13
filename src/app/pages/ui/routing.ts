import { Routes, RouterModule }  from '@angular/router';

import { Ui } from './component';
import { Buttons } from './buttons/component';
import { Grid } from './grid/component';
import { Icons } from './icons/component';
import { Modals } from './modals/component';
import { Typography } from './typography/component';

// noinspection TypeScriptValidateTypes
const routes: Routes = [
  {
    path: '',
    component: Ui,
    children: [
      { path: 'buttons', component: Buttons },
      { path: 'grid', component: Grid },
      { path: 'icons', component: Icons },
      { path: 'typography', component: Typography },
      { path: 'modals', component: Modals }
    ]
  }
];

export const routing = RouterModule.forChild(routes);
