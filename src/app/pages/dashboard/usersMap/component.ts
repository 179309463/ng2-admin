import {Component, ViewEncapsulation} from '@angular/core';

import {UsersMapService} from './service';

@Component({
  selector: 'users-map',
  encapsulation: ViewEncapsulation.None,
  styles: [require('./style.scss')],
  template: require('./template.html')
})
export class UsersMap {

  mapData:Object;

  constructor(private _usersMapService:UsersMapService) {
    this.mapData = this._usersMapService.getData();
  }
}
