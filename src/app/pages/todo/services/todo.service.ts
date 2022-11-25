import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Todo } from '../model/todo.model';

@Injectable({
  providedIn: 'root'
})
export class TodoService {
  private todos: Todo[] = [];
  private storage: Storage = sessionStorage;

  constructor(private readonly router: Router) { }

  getAll(): Todo[] {
    this.todos = JSON.parse(this.storage.getItem('todoItems') || '[]');
    return this.todos;
  }

  save(todo: Todo): void {
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
    this.storage.setItem('todoItems', JSON.stringify(this.todos));
    this.router.navigate(['/todo']);
  }

  toggle(todo: Todo): void {
    todo.isCompleted = !todo.isCompleted;
    this.storage.setItem('todoItems', JSON.stringify(this.todos));
  }

  getTodo(id: number): Todo {
    return this.todos.find((x) => x.id == id) as Todo;
  }
}
