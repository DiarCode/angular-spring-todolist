import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HTTP_INTERCEPTORS } from '@angular/common/http';

import { LoginFormComponent } from './components/login-form/login-form.component';
import { SignupFormComponent } from './components/signup-form/signup-form.component';
import { AuthRequestInterceptor } from './services/interceptors/auth-request-interceptor.service';
import { AuthResponseInterceptor } from './services/interceptors/auth-response-interceptor.service';

import { SharedModule } from '@shared/shared.module';

@NgModule({
  declarations: [LoginFormComponent, SignupFormComponent],
  imports: [CommonModule, SharedModule],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthRequestInterceptor,
      multi: true,
    },
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthResponseInterceptor,
      multi: true,
    },
  ],
  exports: [LoginFormComponent, SignupFormComponent],
})
export class AuthModule {}
