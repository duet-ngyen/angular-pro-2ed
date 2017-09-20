export class Model {
  user;
  items;

  constructor(){
    this.user = "Adam";
    this.items = [
      new TodoItem("By Flowers", false),
      new TodoItem("Get Shoes", false),
      new TodoItem("Collect Tickets", false),
      new TodoItem("Call Joe", true)
    ]
  }
}

export class TodoItem{
  action;
  done;

  constructor(action, done){
    this.action = action;
    this.done = done;
  }
}
