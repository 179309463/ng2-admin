import { Routes, RouterModule }  from '@angular/router';

import { Ui } from './component';
import { Buttons } from './components/buttons/component';
import { Grid } from './components/grid/component';
import { Icons } from './components/icons/component';
import { Modals } from './components/modals/component';
import { Typography } from './components/typography/component';

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
