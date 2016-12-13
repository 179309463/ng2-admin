import { NgModule, Component }      from '@angular/core';
import { CommonModule }  from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule }  from '@angular/router';
import { NgaModule } from '../../theme/nga.module';

import { BubbleMaps } from './bubbleMaps/component';
import { GoogleMaps } from './googleMaps/component';
import { LeafletMaps } from './leafletMaps/component';
import { LineMaps } from './lineMaps/component';
import { BubbleMapsService } from './bubbleMaps/service';
import { LineMapsService } from './lineMaps/service';

@Component({
  selector: 'maps',
  styles: [],
  template: `<router-outlet></router-outlet>`
})
class Maps {}

const routing = RouterModule.forChild([
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
]);

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    NgaModule,
    routing
  ],
  declarations: [
    Maps,
    BubbleMaps,
    GoogleMaps,
    LeafletMaps,
    LineMaps
  ],
  providers: [
    BubbleMapsService,
    LineMapsService
  ]
})
export default class MapsModule {}
