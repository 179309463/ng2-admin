import {Component, ViewEncapsulation} from '@angular/core';

@Component({
  selector: 'grid',
  encapsulation: ViewEncapsulation.None,
  styles: [require('./style.scss')],
  template: require('./template.html'),
})
export class Grid {

  constructor() {
  }
}
