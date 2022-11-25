import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.scss']
})
export class ChildComponent implements OnInit {

  @Input('tle') judul: string = '';

  @Input() counter: number = 0;
  @Output() counterChange: EventEmitter<number> = new EventEmitter<number>();

  @Input() stringMandiri: string = '';
  @Output() stringMandiriChange: EventEmitter<string> = new EventEmitter<string>();

  constructor() { }

  ngOnInit(): void {
  }

  increment(): void {
    this.counter++;
    this.counterChange.emit(this.counter);
  }
  
  decrement(): void {
    if (this.counter > 0) {
      this.counter--;
    }
    this.counterChange.emit(this.counter);
  }

  sendStringMandiri($event: any): void {
    const { value } = $event.target;
    this.stringMandiri = value.toUpperCase();
    this.stringMandiriChange.emit(this.stringMandiri);
  }

}
