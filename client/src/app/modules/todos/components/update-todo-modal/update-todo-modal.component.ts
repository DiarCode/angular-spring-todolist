import { Component } from '@angular/core';

import { UpdateTodoModalService } from './services/update-todo-modal.service';
import { TodosService } from '../../services/todos.service';
import { UpdateTodoDto } from '../../types/update-todo.dto';

import { isStringInvalid } from '@shared/utils/validators/string-validator';
import { ErrorAlertService } from '@widgets/error-alert/error-alert.service';

@Component({
  selector: 'app-update-todo-modal',
  templateUrl: './update-todo-modal.component.html',
})
export class UpdateTodoModalComponent {
  constructor(
    private updateTodoModalService: UpdateTodoModalService,
    private todosService: TodosService,
    private errAlertService: ErrorAlertService
  ) {}

  visible$ = this.updateTodoModalService.visible$;
  todoTitle = '';

  closeUpdateTodoModal() {
    this.updateTodoModalService.closeUpdateTodoModal();
  }

  onUpdateButtonClick() {
    const todoId = this.updateTodoModalService.todoId$.getValue();

    if (
      !todoId ||
      !this.visible$.getValue() ||
      isStringInvalid(this.todoTitle)
    ) {
      this.errAlertService.showErrorAlert('Invalid input text');
      return;
    }

    const dto: UpdateTodoDto = {
      title: this.todoTitle,
    };

    this.todosService.updateTodo(todoId, dto);
    this.closeUpdateTodoModal();
  }
}
