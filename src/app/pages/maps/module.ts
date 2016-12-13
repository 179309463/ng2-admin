import { NgModule }      from '@angular/core';
import { CommonModule }  from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NgaModule } from '../../theme/nga.module';

import { routing }       from './routing';
import { Maps } from './component';
import { BubbleMaps } from './components/bubbleMaps/component';
import { GoogleMaps } from './components/googleMaps/component';
import { LeafletMaps } from './components/leafletMaps/component';
import { LineMaps } from './components/lineMaps/component';
import { BubbleMapsService } from './components/bubbleMaps/service';
import { LineMapsService } from './components/lineMaps/service';


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
