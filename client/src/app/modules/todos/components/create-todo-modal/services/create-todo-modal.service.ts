import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable()
export class CreateTodoModalService {
  private visibleSubject = new BehaviorSubject<boolean>(false);
  public visible$ = this.visibleSubject.asObservable();

  public closeCreateTodoModal() {
    this.visibleSubject.next(false);
  }

  public openCreateTodoModal() {
    this.visibleSubject.next(true);
  }
}
