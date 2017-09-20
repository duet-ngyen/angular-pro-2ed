"use strict";
var Model = (function () {
    function Model() {
        this.user = "Adam";
        this.items = [
            new TodoItem("By Flowers", false),
            new TodoItem("Get Shoes", false),
            new TodoItem("Collect Tickets", false),
            new TodoItem("Call Joe", true)
        ];
    }
    return Model;
}());
exports.Model = Model;
var TodoItem = (function () {
    function TodoItem(action, done) {
        this.action = action;
        this.done = done;
    }
    return TodoItem;
}());
exports.TodoItem = TodoItem;
