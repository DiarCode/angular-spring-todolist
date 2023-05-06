import { CreateTodoModalService } from './../create-todo-modal/services/create-todo-modal.service';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-todos-page-header',
  templateUrl: './todos-page-header.component.html',
})
export class TodosPageHeader {
  constructor(private createTodoModalService: CreateTodoModalService) {}

  openCreateTodoModal() {
    this.createTodoModalService.openCreateTodoModal();
  }
}
