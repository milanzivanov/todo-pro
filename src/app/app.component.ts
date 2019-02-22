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
  model = new Model(TodoItem);

  getName() {
    return this.model.user;
  }

  getTodoItems() {
    return this.model.getTodoItemsFromModel.filter( (item) => !item.done);
  }

  addItem(newItem) {
    if (newItem !== '') {
      this.model.getTodoItemsFromModel.push(new TodoItem(newItem, false));
    }
  }

}


