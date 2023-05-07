import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';

import { ErrorAlertComponent } from './error-alert.component';

@NgModule({
  declarations: [ErrorAlertComponent],
  imports: [CommonModule, MatIconModule],
  exports: [ErrorAlertComponent],
})
export class ErrorAlertModule {}
