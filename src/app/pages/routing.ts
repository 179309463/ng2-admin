import { Routes, RouterModule }  from '@angular/router';
import { Pages } from './component';
// noinspection TypeScriptValidateTypes
const routes: Routes = [
  {
    path: 'login',
    loadChildren: () => System.import('./login/module')
  },
  {
    path: 'register',
    loadChildren: () => System.import('./register/module')
  },
  {
    path: 'pages',
    component: Pages,
    children: [
      { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
      { path: 'dashboard', loadChildren: () => System.import('./dashboard/module') },
      { path: 'editors', loadChildren: () => System.import('./editors/module') },
      { path: 'components', loadChildren: () => System.import('./components/module') },
      { path: 'charts', loadChildren: () => System.import('./charts/module') },
      { path: 'ui', loadChildren: () => System.import('./ui/module') },
      { path: 'forms', loadChildren: () => System.import('./forms/module') },
      { path: 'tables', loadChildren: () => System.import('./tables/module') },
      { path: 'maps', loadChildren: () => System.import('./maps/module') }
    ]
  }
];

export const routing = RouterModule.forChild(routes);
