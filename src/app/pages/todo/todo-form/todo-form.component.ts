import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Todo } from '../model/todo.model';
import { FormGroup, FormControl, Validators, AbstractControl } from '@angular/forms'
import { TodoService } from '../services/todo.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-todo-form',
  templateUrl: './todo-form.component.html',
  styleUrls: ['./todo-form.component.scss']
})
export class TodoFormComponent implements OnInit {

  todo: Todo = <Todo>{};
  todoForm: FormGroup = new FormGroup({
    id: new FormControl(null),
    name: new FormControl('', [
      Validators.required
    ]),
    isCompleted: new FormControl(false)
  });

  constructor(private readonly todoService: TodoService, private readonly route: ActivatedRoute) { }

  get name() {
    return this.todoForm.get('name')!;
  }

  ngOnInit(): void {
    this.route.params.subscribe({
      next: (params) => {
        this.todoService.getTodo(params['id']).subscribe({
          next: (p: Todo) => {
            this.todo = p;
            this.setFormValue(this.todo);
          }
        });
      }
    });
  }

  onSubmitTodo(): void {
    this.todoService.save(this.todoForm.value).subscribe();
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
