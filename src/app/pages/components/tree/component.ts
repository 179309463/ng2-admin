import {Component} from '@angular/core';
import {TreeModel} from 'ng2-tree';

@Component({
  selector: 'tree-view',
  template: require('./template.html'),
})

export class Tree {

  private tree: TreeModel = {
    value: 'Programming languages by programming paradigm',
    children: [
      {
        value: 'Object-oriented programming',
        children: [
          {value: 'Java'},
          {value: 'C++'},
          {value: 'C#'},
        ]
      },
      {
        value: 'Prototype-based programming',
        children: [
          {value: 'JavaScript'},
          {value: 'CoffeeScript'},
          {value: 'Lua'},
        ]
      }
    ]
  };

  constructor() {
  }

}
