import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Todo } from '../model/todo.model';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.scss']
})
export class TodoListComponent implements OnInit {

  @Input() todos: Todo[] = [];
  @Output() editTodo: EventEmitter<Todo> = new EventEmitter<Todo>();
  @Output() toggleTodo: EventEmitter<Todo> = new EventEmitter<Todo>();
  @Output() deleteTodo: EventEmitter<Todo> = new EventEmitter<Todo>();

  opacity = 'opacity: 0;';

  constructor() { }

  ngOnInit(): void {
  }

  onMouseover(): void {
    this.opacity = 'opacity: 1;'
  }

  onMouseout(): void {
    this.opacity = 'opacity: 0;'
  }

  onDeleteTodo(todo: Todo): void {
    this.deleteTodo.emit(todo);
  }

  onCheckTodo(todo: Todo): void {
    todo.isCompleted = !todo.isCompleted;
    this.toggleTodo.emit(todo);
  }

  onEditTodo(todo: Todo): void {
    this.editTodo.emit(todo);
  }

}
