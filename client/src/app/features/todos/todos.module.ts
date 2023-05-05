import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TodosPageComponent } from './pages/todos/todos-page.component';
import { TodoItemComponent } from './components/todo-item/todo-item.component';
import { TodosListComponent } from './components/todos-list/todos-list.component';
import { CreateTodoModalComponent } from './components/create-todo-modal/create-todo-modal.component';
import { UpdateTodoModalComponent } from './components/update-todo-modal/update-todo-modal.component';

import { createTodoModalReducer } from './components/create-todo-modal/store/create-todo-modal.reducer';

import { ModalModule } from '@app/widgets/modal/modal.module';
import { MatIconModule } from '@angular/material/icon';

import { StoreModule } from '@ngrx/store';

@NgModule({
  declarations: [
    TodosPageComponent,
    TodoItemComponent,
    TodosListComponent,
    CreateTodoModalComponent,
    UpdateTodoModalComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    StoreModule.forRoot({ createTodoModal: createTodoModalReducer }),
    MatIconModule,
    ModalModule,
  ],
  exports: [],
})
export class TodosModule {}
