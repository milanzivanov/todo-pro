import { Component } from '@angular/core';
import { Model, TodoItem } from './model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  // old way
  // model = new Model();

  // MY WAY
  model = new Model();

  getName() {
    return this.model.user;
  }

  getTodoItems() {
    return this.model.getTodoItemsFromModel.filter( (item) => !item.done);
  }

  // tslint:disable-next-line:member-ordering
  clearInputBtn: string;
  addItem(newItem: string) {
    if (newItem !== '') {
      this.model.getTodoItemsFromModel.push(new TodoItem(newItem, false));
    }
    this.clearInputBtn = '';
  }

  // tslint:disable-next-line:member-ordering
  clearInputEnter: string;
  onKeyUp(item: string) {
    console.log(item);
    this.model.getTodoItemsFromModel.push(new TodoItem(item, false));
    this.clearInputEnter = '';
  }


  // delite item
  deliteItem(item: TodoItem) {
    // console.log(typeof(item));

    const index = this.model.getTodoItemsFromModel.findIndex(p => p === item);
    this.model.getTodoItemsFromModel.splice(index, 1);
    console.log('index:', index);

  }

}


