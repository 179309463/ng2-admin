import { NgModule, Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';
import { NgaModule } from '../../theme/nga.module';

import { ChartistJs } from './chartist/component';
import { ChartistJsService } from './chartist/service';

@Component({
  selector: 'maps',
  styles: [],
  template: `<router-outlet></router-outlet>`
})
class Charts {}

const routing = RouterModule.forChild([
  {
    path: '',
    component: Charts,
    children: [
      { path: 'chartist', component: ChartistJs }
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
    Charts,
    ChartistJs
  ],
  providers: [
    ChartistJsService
  ]
})
export default class ChartsModule {}
