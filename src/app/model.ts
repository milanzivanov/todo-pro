
// old way
// export class TodoItem {
//   action: string;
//   done: boolean;
//   constructor(action: string, done: boolean) {
//     this.action = action;
//     this.done = done;
//   }
// }

// export class Model {
//   user: string;
//   items: any;
//   constructor() {
//     this.user = 'Adam';
//     this.items = [new TodoItem('Buy Flowers', false),
//     new TodoItem('Get Shoes', false),
//     new TodoItem('Collect Tickets', false),
//     new TodoItem('Call Joe', false)];
//   }
// }

//  my way
export class TodoItem {
  constructor(public action: string, public done: boolean) {
  }
}

export class Model {
  user: string;
  private _items: TodoItem[];
  constructor() {
    this.user = 'Milan';
    this._items = [
      new TodoItem( 'Learn Angular in progress', false),
      new TodoItem('Practice everything wath you learn', true),
      new TodoItem('Consistence, consistenc and consistenc', true),
    ];
  }

  get getTodoItemsFromModel() {
    return this._items;
  }

}


