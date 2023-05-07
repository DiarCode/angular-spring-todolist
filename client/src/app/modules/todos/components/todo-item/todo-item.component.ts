import { Component, Input } from '@angular/core';

import { TodosService } from './../../services/todos.service';
import { UpdateTodoModalService } from './../update-todo-modal/services/update-todo-modal.service';

import { Todo } from '@shared/types/todo/todo.type';

@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
})
export class TodoItemComponent {
  @Input() todo: Todo;

  constructor(
    private updateTodoModalService: UpdateTodoModalService,
    private todosService: TodosService
  ) {}

  openUpdateTodoModal() {
    this.updateTodoModalService.openUpdateTodoModal(this.todo.id);
  }

  onDeleteClick() {
    this.todosService.deleteTodo(this.todo.id);
  }

  onCompleteClick() {
    this.todosService.completeTodo(this.todo.id);
  }
}
