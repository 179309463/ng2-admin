import { NgModule }      from '@angular/core';
import { CommonModule }  from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NgaModule } from '../../theme/nga.module';

import { routing }       from './routing';
import { DropdownModule, ModalModule } from 'ng2-bootstrap/ng2-bootstrap';
import { Ui } from './component';
import { Buttons } from './components/buttons/component';
import { Grid } from './components/grid/component';
import { Icons } from './components/icons/component';
import { Modals } from './components/modals/component';
import { Typography } from './components/typography/component';

import { FlatButtons } from './components/buttons/components/flatButtons/component';
import { RaisedButtons } from './components/buttons/components/raisedButtons/component';
import { SizedButtons } from './components/buttons/components/sizedButtons/component';
import { DisabledButtons } from './components/buttons/components/disabledButtons/component';
import { IconButtons } from './components/buttons/components/iconButtons/component';
import { LargeButtons } from './components/buttons/components/largeButtons/component';
import { DropdownButtons } from './components/buttons/components/dropdownButtons/component';
import { GroupButtons } from './components/buttons/components/groupButtons/component';
import { IconsService } from './components/icons/service';


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
