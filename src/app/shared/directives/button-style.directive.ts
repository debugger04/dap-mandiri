import { Directive, HostBinding, Input } from '@angular/core';

enum ButtonSize {
  sm = 'btn-sm',
  md = 'btn-md',
  lg = 'btn-lg'
}

enum ButtonColor {
  primary = 'btn-primary',
  warning = 'btn-warning',
  danger = 'btn-danger'
}

@Directive({
  selector: '[appButtonStyle]'
})
export class ButtonStyleDirective {

  @Input() size: 'sm' | 'md' | 'lg' = 'md';
  @Input() color: 'primary' | 'warning' | 'danger' = 'primary';

  constructor() { }

  @HostBinding('class')
  get btnStyle(): string {
    const btnColor: ButtonColor = ButtonColor[this.color];
    const btnSize: ButtonSize = ButtonSize[this.size];
    return `btn ${btnColor} ${btnSize}`;
  }

}
