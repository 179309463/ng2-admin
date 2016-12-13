import { Routes, RouterModule }  from '@angular/router';

import { Maps } from './component';
import { BubbleMaps } from './components/bubbleMaps/component';
import { GoogleMaps } from './components/googleMaps/component';
import { LeafletMaps } from './components/leafletMaps/component';
import { LineMaps } from './components/lineMaps/component';

// noinspection TypeScriptValidateTypes
const routes: Routes = [
  {
    path: '',
    component: Maps,
    children: [
      { path: 'bubblemaps', component: BubbleMaps },
      { path: 'googlemaps', component: GoogleMaps },
      { path: 'leafletmaps', component: LeafletMaps },
      { path: 'linemaps', component: LineMaps }
    ]
  }
];

export const routing = RouterModule.forChild(routes);
