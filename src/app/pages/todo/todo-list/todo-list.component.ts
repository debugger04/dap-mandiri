import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Todo } from '../model/todo.model';
import { TodoService } from '../services/todo.service';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.scss']
})
export class TodoListComponent implements OnInit {

  todos: Todo[] = [];

  opacity = 'opacity: 0;';

  constructor(private readonly todoService: TodoService) { }

  ngOnInit(): void {
    this.onLoadTodo();
  }

  onMouseover(): void {
    this.opacity = 'opacity: 1;'
  }

  onMouseout(): void {
    this.opacity = 'opacity: 0;'
  }

  onLoadTodo(): void {
    this.todoService.getAll().subscribe({
      next: (p: Todo[]) => {
        this.todos = p;
      }
    });
  }

  onDeleteTodo(todo: Todo): void {
    this.todoService.delete(todo).subscribe();
  }

  onCheckTodo(todo: Todo): void {
    this.todoService.toggle(todo).subscribe();
  }

}
