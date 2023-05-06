import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
})
export class InputComponent {
  @Input()
  placeholder?: string;

  @Input()
  value: string;

  @Output()
  valueChange = new EventEmitter<string>();
}
