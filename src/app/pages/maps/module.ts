import { NgModule, Component }      from '@angular/core';
import { CommonModule }  from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule }  from '@angular/router';
import { NgaModule } from '../../theme/nga.module';

import { BubbleMaps } from './bubble/component';
import { GoogleMaps } from './google/component';
import { LeafletMaps } from './leaflet/component';
import { LineMaps } from './line/component';

import { BubbleMapsService } from './bubble/service';
import { LineMapsService } from './line/service';

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
      { path: 'bubble', component: BubbleMaps },
      { path: 'google', component: GoogleMaps },
      { path: 'leaflet', component: LeafletMaps },
      { path: 'line', component: LineMaps }
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
