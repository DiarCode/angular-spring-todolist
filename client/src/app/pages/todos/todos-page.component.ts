import { Observable } from 'rxjs';
import { Component, OnInit } from '@angular/core';

import { Todo } from '@shared/types/todo/todo.type';
import { TodosService } from '@modules/todos/services/todos.service';
import { BrowserTitleService } from '@shared/services/browser-title.service';

@Component({
  selector: 'app-todos-page',
  templateUrl: './todos-page.component.html',
})
export class TodosPageComponent implements OnInit {
  constructor(
    private todosService: TodosService,
    private browserTitle: BrowserTitleService
  ) {}

  visibleTodos$: Observable<Todo[]>;

  ngOnInit(): void {
    this.browserTitle.setTitle('Todos');

    this.visibleTodos$ = this.todosService.getFilteredTodos();
  }
}
