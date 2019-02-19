
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

  constructor(private action: string, private done: boolean) {
  }

}


export class Model {
  user: string;

  constructor( private _items: any ) {
    this.user = 'Milan';
    this._items = [
      new TodoItem( 'Learn Angular', false),
      new TodoItem('Practice everything wath you learn', true)
    ];
  }


  getTodoItemsFRomModel() {
    return this._items;
  }

}

const model2 = new Model(TodoItem);
const r = model2.getTodoItemsFRomModel();


