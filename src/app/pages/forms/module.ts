import { NgModule, Component }      from '@angular/core';
import { CommonModule }  from '@angular/common';
import { FormsModule as AngularFormsModule } from '@angular/forms';
import { Routes, RouterModule }  from '@angular/router';
import { NgaModule } from '../../theme/nga.module';

import { RatingModule } from 'ng2-bootstrap/ng2-bootstrap';
import { Inputs } from './inputs/component';
import { Layouts } from './layouts/component';

import { StandardInputs } from './inputs/standardInputs/component';
import { ValidationInputs } from './inputs/validationInputs/component';
import { GroupInputs } from './inputs/groupInputs/component';
import { CheckboxInputs } from './inputs/checkboxInputs/component';
import { Rating } from './inputs/ratinginputs/component';
import { SelectInputs } from './inputs/selectInputs/component';

import { InlineForm } from './layouts/inlineForm/component';
import { BlockForm } from './layouts/blockForm/component';
import { HorizontalForm } from './layouts/horizontalForm/component';
import { BasicForm } from './layouts/basicForm/component';
import { WithoutLabelsForm } from './layouts/withoutLabelsForm/component';

import {} from '@angular/core';

@Component({
  selector: 'forms',
  styles: [],
  template: `<router-outlet></router-outlet>`
})
class Forms {}

const routing = RouterModule.forChild([
  {
    path: '',
    component: Forms,
    children: [
      { path: 'inputs', component: Inputs },
      { path: 'layouts', component: Layouts }
    ]
  }
]);


@NgModule({
  imports: [
    CommonModule,
    AngularFormsModule,
    NgaModule,
    RatingModule,
    routing
  ],
  declarations: [
    Layouts,
    Inputs,
    Forms,
    StandardInputs,
    ValidationInputs,
    GroupInputs,
    CheckboxInputs,
    Rating,
    SelectInputs,
    InlineForm,
    BlockForm,
    HorizontalForm,
    BasicForm,
    WithoutLabelsForm
  ]
})
export default class FormsModule {
}
