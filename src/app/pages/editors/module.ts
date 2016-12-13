import { NgModule, Component } from '@angular/core';
import { CommonModule }  from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule }  from '@angular/router';
import { CKEditorModule } from 'ng2-ckeditor';
import { NgaModule } from '../../theme/nga.module';

import { Ckeditor } from './ckeditor/component';

@Component({
  selector: 'editors',
  template: `<router-outlet></router-outlet>`
})
class Editors {}

const routing = RouterModule.forChild([
  {
    path: '',
    component: Editors,
    children: [
      { path: 'ckeditor', component: Ckeditor }
    ]
  }
]);


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    NgaModule,
    CKEditorModule,
    routing
  ],
  declarations: [
    Editors,
    Ckeditor
  ]
})
export default class EditorsModule {
}
