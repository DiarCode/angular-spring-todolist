import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable()
export class UpdateTodoModalService {
  visible$ = new BehaviorSubject<boolean>(false);
  todoId$ = new BehaviorSubject<number | null>(null);

  public closeUpdateTodoModal() {
    this.visible$.next(false);

    this.clearUpdateTodoModalState();
  }

  public openUpdateTodoModal(id: number) {
    this.visible$.next(true);
    this.todoId$.next(id);
  }

  private clearUpdateTodoModalState() {
    this.visible$.next(false);
    this.todoId$.next(null);
  }
}
