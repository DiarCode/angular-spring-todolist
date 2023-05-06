import { Component } from '@angular/core';
import { UpdateTodoModalService } from './services/update-todo-modal.service';
import { TodosService } from '../../services/todos.service';
import { UpdateTodoDto } from '../../types/update-todo.dto';
import { validateString } from '@app/shared/utils/validators/string-validator';

@Component({
  selector: 'app-update-todo-modal',
  templateUrl: './update-todo-modal.component.html',
})
export class UpdateTodoModalComponent {
  constructor(
    private updateTodoModalService: UpdateTodoModalService,
    private todosService: TodosService
  ) {}

  visible$ = this.updateTodoModalService.visible$;
  todoTitle = '';

  closeUpdateTodoModal() {
    this.updateTodoModalService.closeUpdateTodoModal();
  }

  onUpdateButtonClick() {
    const todoId = this.updateTodoModalService.todoId$.getValue();

    if (!todoId || !this.visible$ || !validateString(this.todoTitle)) return;

    const dto: UpdateTodoDto = {
      title: this.todoTitle,
    };

    this.todosService.updateTodo(todoId, dto);
    this.closeUpdateTodoModal();
  }
}
