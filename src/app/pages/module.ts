import { NgModule }      from '@angular/core';
import { CommonModule }  from '@angular/common';

import { routing }       from './routing';
import { NgaModule } from '../theme/nga.module';

import { Pages } from './component';

@NgModule({
  imports: [CommonModule, NgaModule, routing],
  declarations: [Pages]
})
export class PagesModule {
}
