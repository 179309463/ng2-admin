import { NgModule }      from '@angular/core';
import { CommonModule }  from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NgaModule } from '../../theme/nga.module';

import { routing }       from './routing';
import { DropdownModule, ModalModule } from 'ng2-bootstrap/ng2-bootstrap';
import { Ui } from './component';
import { Buttons } from './buttons/component';
import { Grid } from './grid/component';
import { Icons } from './icons/component';
import { Modals } from './modals/component';
import { Typography } from './typography/component';

import { FlatButtons } from './buttons/flatButtons/component';
import { RaisedButtons } from './buttons/raisedButtons/component';
import { SizedButtons } from './buttons/sizedButtons/component';
import { DisabledButtons } from './buttons/disabledButtons/component';
import { IconButtons } from './buttons/iconButtons/component';
import { LargeButtons } from './buttons/largeButtons/component';
import { DropdownButtons } from './buttons/dropdownButtons/component';
import { GroupButtons } from './buttons/groupButtons/component';
import { IconsService } from './icons/service';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    NgaModule,
    DropdownModule,
    ModalModule,
    routing
  ],
  declarations: [
    Buttons,
    Grid,
    Icons,
    Modals,
    Typography,
    Ui,
    FlatButtons,
    RaisedButtons,
    SizedButtons,
    DisabledButtons,
    IconButtons,
    LargeButtons,
    DropdownButtons,
    GroupButtons
  ],
  providers: [
    IconsService
  ]
})
export default class UiModule {
}
