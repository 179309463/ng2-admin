import {Component, ViewEncapsulation} from '@angular/core';

@Component({
  selector: 'basic-tables',
  encapsulation: ViewEncapsulation.None,
  styles: [require('./style.scss')],
  template: require('./template.html')
})
export class BasicTables {

  constructor() {
  }
}
