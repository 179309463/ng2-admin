import { Routes, RouterModule }  from '@angular/router';

import { Editors } from './component';
import { Ckeditor } from './ckeditor/component';

// noinspection TypeScriptValidateTypes
const routes: Routes = [
  {
    path: '',
    component: Editors,
    children: [
      { path: 'ckeditor', component: Ckeditor }
    ]
  }
];

export const routing = RouterModule.forChild(routes);
