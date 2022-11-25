import { Component, OnInit } from '@angular/core';
import { Todo } from './model/todo.model';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.scss']
})
export class TodoComponent implements OnInit {

  todos: Todo[] = [];
  private _todo: Todo = <Todo>{};

  d: Date = new Date();

  constructor() { }

  ngOnInit(): void {
  }

  onDeletedTodo(todo: Todo): void {
    const idx = this.todos.indexOf(todo);
    this.todos.splice(idx, 1);
    sessionStorage.setItem('todoItems', JSON.stringify(this.todos));
  }

  onEditedTodo(todo: Todo): void {
    this._todo = todo;
  }

}
