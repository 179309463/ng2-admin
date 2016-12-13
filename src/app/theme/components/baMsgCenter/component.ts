import {Component} from '@angular/core';

import {BaMsgCenterService} from './service';

@Component({
  selector: 'ba-msg-center',
  providers: [BaMsgCenterService],
  styles: [require('./style.scss')],
  template: require('./template.html')
})
export class BaMsgCenter {

  public notifications:Array<Object>;
  public messages:Array<Object>;

  constructor(private _baMsgCenterService:BaMsgCenterService) {
    this.notifications = this._baMsgCenterService.getNotifications();
    this.messages = this._baMsgCenterService.getMessages();
  }

}
