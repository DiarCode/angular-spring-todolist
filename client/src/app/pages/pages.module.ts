import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PagesRoutingModule } from '@pages/pages-routing.module';
import { HomePageComponent } from '@pages/home/home-page.component';
import { TodosPageComponent } from '@pages/todos/todos-page.component';
import { SignupPageComponent } from '@pages/signup/signup-page.component';
import { LoginPageComponent } from '@pages/login/login-page.component';

import { SharedModule } from '@shared/shared.module';
import { TodosModule } from '@modules/todos/todos.module';
import { AuthModule } from '@modules/auth/auth.module';

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
