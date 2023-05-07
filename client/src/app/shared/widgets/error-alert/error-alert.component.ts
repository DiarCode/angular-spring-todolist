import { Component, OnInit } from '@angular/core';
import { ErrorAlertService } from './error-alert.service';

@Component({
  selector: 'app-error-alert',
  templateUrl: './error-alert.component.html',
})
export class ErrorAlertComponent {
  constructor(private errorAlertService: ErrorAlertService) {}

  state$ = this.errorAlertService.state$;

  onCloseButtonClick() {
    this.errorAlertService.closeErrorAlert();
  }
}
