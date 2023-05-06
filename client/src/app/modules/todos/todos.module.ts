import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TodoItemComponent } from './components/todo-item/todo-item.component';
import { TodosListComponent } from './components/todos-list/todos-list.component';
import { CreateTodoModalComponent } from './components/create-todo-modal/create-todo-modal.component';
import { UpdateTodoModalComponent } from './components/update-todo-modal/update-todo-modal.component';
import { TodosPageHeader } from './components/todos-page-header/todos-page-header.component';
import { TodosFilterComponent } from './components/todos-filter/todos-filter.component';
import { CreateTodoModalService } from './components/create-todo-modal/services/create-todo-modal.service';
import { UpdateTodoModalService } from './components/update-todo-modal/services/update-todo-modal.service';
import { TodosService } from './services/todos.service';

import { ModalModule } from '@widgets/modal/modal.module';
import { MatIconModule } from '@angular/material/icon';
import { SharedModule } from '@app/shared/shared.module';

@NgModule({
  declarations: [
    TodoItemComponent,
    TodosListComponent,
    CreateTodoModalComponent,
    UpdateTodoModalComponent,
    TodosPageHeader,
    TodosFilterComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    MatIconModule,
    ModalModule,
    SharedModule,
  ],
  providers: [TodosService, CreateTodoModalService, UpdateTodoModalService],
  exports: [
    TodoItemComponent,
    TodosListComponent,
    CreateTodoModalComponent,
    UpdateTodoModalComponent,
    TodosPageHeader,
    TodosFilterComponent,
  ],
})
export class TodosModule {}
