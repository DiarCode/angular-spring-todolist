import { Component, Input } from '@angular/core';
import { Todo } from '@app/shared/types/todo/todo.type';
import { Store } from '@ngrx/store';
import { CreateTodoModalActions } from '../create-todo-modal/store/create-todo-modal.actions';

@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
})
export class TodoItemComponent {
  @Input() todo: Todo;

  constructor(private store: Store) {}

  onCreateTodoModalStateChanged() {
    this.store.dispatch(
      CreateTodoModalActions.changeModalState({ visible: true })
    );
  }
}
