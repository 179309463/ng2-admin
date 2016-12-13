import {Component, ViewEncapsulation} from '@angular/core';

@Component({
  selector: 'buttons',
  encapsulation: ViewEncapsulation.None,
  styles: [require('./style.scss')],
  template: require('./template.html'),
})
export class Buttons {

  constructor() {
  }
}
