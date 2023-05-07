import { Component, EventEmitter, Input, Output } from '@angular/core';

type InputType = 'text' | 'password' | 'email';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
})
export class InputComponent {
  @Input()
  placeholder?: string;

  @Input()
  type?: InputType = 'text';

  @Input()
  value: string;

  @Output()
  valueChange = new EventEmitter<string>();
}
