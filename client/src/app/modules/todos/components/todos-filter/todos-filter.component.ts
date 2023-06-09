import { Component } from '@angular/core';

import { TodosFilters } from './todos-filters.enum';
import { TodosService } from './../../services/todos.service';

@Component({
  selector: 'app-todos-filter',
  templateUrl: './todos-filter.component.html',
})
export class TodosFilterComponent {
  constructor(private todosService: TodosService) {}

  filtersList = Object.values(TodosFilters);
  currentFilter$ = this.todosService.filter$;

  setFilter(filter: TodosFilters) {
    this.todosService.setFilter(filter);
  }
}
