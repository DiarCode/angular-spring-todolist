import { Component } from '@angular/core';

import { CreateTodoModalService } from './services/create-todo-modal.service';
import { CreateTodoDto } from '../../types/create-todo.dto';
import { TodosService } from './../../services/todos.service';

import { ErrorAlertService } from '@widgets/error-alert/error-alert.service';

@Component({
  selector: 'app-create-todo-modal',
  templateUrl: './create-todo-modal.component.html',
})
export class CreateTodoModalComponent {
  constructor(
    private createTodoModalService: CreateTodoModalService,
    private todosService: TodosService,
    private errorAlertService: ErrorAlertService
  ) {}

  visible$ = this.createTodoModalService.visible$;

  todoTitle: string = '';
  todoDeadline: Date;

  closeCreateTodoModal() {
    this.createTodoModalService.closeCreateTodoModal();
  }

  onCreateButtonClick() {
    const values = [this.todoTitle, this.todoDeadline];

    if (values.some((v) => v == null || v === undefined || v === '')) {
      this.errorAlertService.showErrorAlert('Missing fields');
      return;
    }

    const dto: CreateTodoDto = {
      title: this.todoTitle,
      deadline: this.todoDeadline,
    };

    this.todosService.createTodo(dto);
    this.closeCreateTodoModal();
  }
}
