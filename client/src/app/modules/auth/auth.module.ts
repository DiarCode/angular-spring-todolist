import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LoginFormComponent } from './components/login-form/login-form.component';
import { SignupFormComponent } from './components/signup-form/signup-form.component';

import { SharedModule } from '@app/shared/shared.module';

@NgModule({
  declarations: [LoginFormComponent, SignupFormComponent],
  imports: [CommonModule, SharedModule],
  exports: [LoginFormComponent, SignupFormComponent],
})
export class AuthModule {}
