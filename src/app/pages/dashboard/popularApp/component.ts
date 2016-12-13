import {Component, ViewEncapsulation} from '@angular/core';

@Component({
  selector: 'popular-app',
  encapsulation: ViewEncapsulation.None,
  styles: [require('./style.scss')],
  template: require('./template.html')
})
export class PopularApp {

  ngOnInit() {
  }
}
