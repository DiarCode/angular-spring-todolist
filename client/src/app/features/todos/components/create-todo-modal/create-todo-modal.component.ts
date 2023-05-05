import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { selectCreateTodoModalState } from './store/creat-todo-modal.selectors';
import { CreateTodoModalActions } from './store/create-todo-modal.actions';

@Component({
  selector: 'app-create-todo-modal',
  templateUrl: './create-todo-modal.component.html',
})
export class CreateTodoModalComponent {
  constructor(private store: Store) {}

  visible$: Observable<boolean> = this.store.select(selectCreateTodoModalState);

  todoTitle = '';
  todoDeadline = null;

  onCreateTodoModalStateChanged() {
    this.store.dispatch(
      CreateTodoModalActions.changeModalState({ visible: false })
    );
  }
}
