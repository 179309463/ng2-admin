import { NgModule }      from '@angular/core';
import { CommonModule }  from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NgaModule } from '../../theme/nga.module';

import { routing }       from './routing';
import { Maps } from './component';
import { BubbleMaps } from './bubbleMaps/component';
import { GoogleMaps } from './googleMaps/component';
import { LeafletMaps } from './leafletMaps/component';
import { LineMaps } from './lineMaps/component';
import { BubbleMapsService } from './bubbleMaps/service';
import { LineMapsService } from './lineMaps/service';


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
