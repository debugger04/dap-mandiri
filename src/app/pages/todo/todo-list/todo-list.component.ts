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
  @Output() deleteTodo: EventEmitter<Todo> = new EventEmitter<Todo>();

  opacity = 'opacity: 0;';

  constructor(private readonly todoService: TodoService) { }

  ngOnInit(): void {
    this.todos = this.todoService.getAll();
    console.log(this.todos);
    
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
    this.todoService.toggle(todo)
  }

}
