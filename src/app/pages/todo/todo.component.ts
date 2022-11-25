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

  get todo() {
    return this._todo;
  }
  set todo(todo: Todo) {
    this.onSaveTodo(todo);
  }

  constructor() { }


  ngOnInit(): void {
    this.loadTodos();
  }

  loadTodos(): void {
    this.todos = JSON.parse(sessionStorage.getItem('todoItems') || '[]');
  }

  onSaveTodo(todo: Todo): void {
    if(todo.id) {
      this.todos = this.todos.map((x) => {
        if (x.id == todo.id) {
          x = todo;
        }
        return x;
      });
    } else {
      todo.id = this.todos.length + 1;
      this.todos.push(todo);
    }
    sessionStorage.setItem('todoItems', JSON.stringify(this.todos));
  }

  onDeletedTodo(todo: Todo): void {
    const idx = this.todos.indexOf(todo);
    this.todos.splice(idx, 1);
    sessionStorage.setItem('todoItems', JSON.stringify(this.todos));
  }

  onToggleTodo(): void {
    sessionStorage.setItem('todoItems', JSON.stringify(this.todos));
  }

  onEditedTodo(todo: Todo): void {
    this._todo = todo;
  }

}
