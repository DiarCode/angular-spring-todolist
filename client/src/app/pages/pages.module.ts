import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedModule } from '@shared/shared.module';
import { TodosModule } from '@modules/todos/todos.module';

import { PagesRoutingModule } from './pages-routing.module';
import { HomePageComponent } from './home/home-page.component';
import { TodosPageComponent } from './todos/todos-page.component';
import { SignupPageComponent } from './signup/signup-page.component';
import { LoginPageComponent } from './login/login-page.component';
import { AuthModule } from '@app/modules/auth/auth.module';

@NgModule({
  declarations: [
    HomePageComponent,
    TodosPageComponent,
    SignupPageComponent,
    LoginPageComponent,
  ],
  imports: [
    CommonModule,
    SharedModule,
    PagesRoutingModule,
    TodosModule,
    AuthModule,
  ],
})
export class PagesModule {}
