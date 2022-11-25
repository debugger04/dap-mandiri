import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Todo } from '../model/todo.model';
import { FormGroup, FormControl, Validators, AbstractControl } from '@angular/forms'

@Component({
  selector: 'app-todo-form',
  templateUrl: './todo-form.component.html',
  styleUrls: ['./todo-form.component.scss']
})
export class TodoFormComponent implements OnInit {

  @Input() todo: Todo = <Todo>{};
  @Output() todoChange: EventEmitter<Todo> = new EventEmitter<Todo>();
  todoForm: FormGroup = new FormGroup({
    id: new FormControl(null),
    name: new FormControl('', [
      Validators.required,
      // Validators.minLength(4)
      Validators.pattern('[a-zA-z]*')
    ]),
    isCompleted: new FormControl(false)
  });

  constructor() { }

  get name() {
    return this.todoForm.get('name')!;
  }

  ngOnInit(): void {
  }

  ngOnChanges(): void {
    console.log('Todoo', this.todo)
    this.setFormValue(this.todo);
  }

  onSubmitTodo(): void {
    this.todo = this.todoForm.value;
    this.todoChange.emit(this.todo);
    this.todoForm.reset();
  }

  setFormValue(todo: Todo): void {
    this.todoForm.controls['id']?.setValue(todo.id);
    this.todoForm.controls['name']?.setValue(todo.name);
    this.todoForm.controls['isCompleted']?.setValue(todo.isCompleted);
  }

  isValidated(field: string): boolean {
    const control: AbstractControl = this.todoForm.get(field) as AbstractControl;
    return (control && control.invalid && (control.dirty || control.touched));
  }

}
