import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable, Observer } from 'rxjs';
import { Todo } from '../model/todo.model';
import iTodoService from './itodo.service';

@Injectable({
  providedIn: 'root'
})
export class TodoService implements iTodoService {
  private todos: Todo[] = [];
  private storage: Storage = sessionStorage;

  constructor(private readonly router: Router) { }

  getAll():Observable <Todo[]> {
    return new Observable<Todo[]>((obs: Observer<Todo[]>) => {
      this.todos = JSON.parse(this.storage.getItem('todoItems') || '[]');
      obs.next(this.todos);
    });
  }

  save(todo: Todo): Observable<void> {
    return new Observable<void>((obs: Observer<void>) => {
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
    });
  }

  toggle(todo: Todo): Observable<void> {
    return new Observable<void>((obs: Observer<void>) => {
      todo.isCompleted = !todo.isCompleted;
      this.storage.setItem('todoItems', JSON.stringify(this.todos));
    });
  }

  getTodo(id: number): Observable<Todo> {
    return new Observable<Todo>((obs: Observer<Todo>) => {
      obs.next(this.todos.find((x) => x.id == id) as Todo);
    });
  }

  delete(todo: Todo): Observable<void> {
    return new Observable<void>((obs: Observer<void>) => {
      const idx = this.todos.indexOf(todo);
      this.todos.splice(idx, 1);
      sessionStorage.setItem('todoItems', JSON.stringify(this.todos));
    });
  }
}
