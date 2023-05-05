import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { TodosRouting } from '@app/features/todos/todos-routing.module';
import { HomeRouting } from './features/home/home-routing.module';

const routes: Routes = [];

@NgModule({
  imports: [RouterModule.forRoot(routes), TodosRouting, HomeRouting],
  exports: [RouterModule],
})
export class AppRoutingModule {}
