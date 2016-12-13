import { NgModule }      from '@angular/core';
import { CommonModule }  from '@angular/common';
import { FormsModule as AngularFormsModule } from '@angular/forms';
import { NgaModule } from '../../theme/nga.module';

import { routing }       from './routing';

import { RatingModule } from 'ng2-bootstrap/ng2-bootstrap';
import { Forms } from './component';
import { Inputs } from './components/inputs/component';
import { Layouts } from './components/layouts/component';

import { StandardInputs } from './components/inputs/components/standardInputs/component';
import { ValidationInputs } from './components/inputs/components/validationInputs/component';
import { GroupInputs } from './components/inputs/components/groupInputs/component';
import { CheckboxInputs } from './components/inputs/components/checkboxInputs/component';
import { Rating } from './components/inputs/components/ratinginputs/component';
import { SelectInputs } from './components/inputs/components/selectInputs/component';

import { InlineForm } from './components/layouts/components/inlineForm/component';
import { BlockForm } from './components/layouts/components/blockForm/component';
import { HorizontalForm } from './components/layouts/components/horizontalForm/component';
import { BasicForm } from './components/layouts/components/basicForm/component';
import { WithoutLabelsForm } from './components/layouts/components/withoutLabelsForm/component';

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
