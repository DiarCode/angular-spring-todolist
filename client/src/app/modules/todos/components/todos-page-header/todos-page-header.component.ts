import { Component } from '@angular/core';

import { CreateTodoModalService } from './../create-todo-modal/services/create-todo-modal.service';

@Component({
  selector: 'app-todos-page-header',
  templateUrl: './todos-page-header.component.html',
})
export class TodosPageHeader {
  constructor(private createTodoModalService: CreateTodoModalService) {}

  todaysDate = new Date();

  openCreateTodoModal() {
    this.createTodoModalService.openCreateTodoModal();
  }
}
