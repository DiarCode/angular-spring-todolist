import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, combineLatest, map } from 'rxjs';

import { AuthService } from '@modules/auth/services/auth.service';

import { CreateTodoApiDto, CreateTodoDto } from '../types/create-todo.dto';
import { TodosFilters } from '../components/todos-filter/todos-filters.enum';
import { UpdateTodoDto } from '../types/update-todo.dto';
import { Todo } from '@shared/types/todo/todo.type';

import { ErrorAlertService } from '@widgets/error-alert/error-alert.service';
import { API_URL } from '@shared/constants/api.url';

const TODOS_API_URL = `${API_URL}/todos`;

@Injectable()
export class TodosService {
  constructor(
    private httpClient: HttpClient,
    private authService: AuthService,
    private errAlertService: ErrorAlertService
  ) {}

  todos$ = new BehaviorSubject<Todo[]>([]);
  filter$ = new BehaviorSubject<TodosFilters>(TodosFilters.All);

  setFilter(value: TodosFilters) {
    this.filter$.next(value);
  }

  createTodo(dto: CreateTodoDto): void {
    const auth = this.authService.auth$.getValue();
    if (!auth) return;

    const apiDto: CreateTodoApiDto = {
      ...dto,
      userId: auth.id,
    };

    this.httpClient.post<Todo>(TODOS_API_URL, apiDto).subscribe({
      next: (res) => {
        const updatedTodos = [...this.todos$.getValue(), res];
        this.todos$.next(updatedTodos);
      },
      error: this.handleError,
    });
  }

  getFilteredTodos() {
    this.getAllTodos();

    return combineLatest([this.todos$, this.filter$]).pipe(
      map(([todos, filter]) => {
        switch (filter) {
          case TodosFilters.Completed:
            return todos.filter((todo) => todo.completed);
          case TodosFilters.Active:
            return todos.filter((todo) => !todo.completed);
          default:
            return todos;
        }
      })
    );
  }

  deleteTodo(id: number) {
    this.httpClient
      .delete<void>(`${TODOS_API_URL}/${id}`, { observe: 'response' })
      .subscribe({
        next: (res) => {
          if (res.status !== 200) return;

          const updatedTodos = this.todos$
            .getValue()
            .filter((todo) => todo.id !== id);

          this.todos$.next(updatedTodos);
        },
        error: this.handleError,
      });
  }

  updateTodo(id: number, dto: UpdateTodoDto) {
    this.httpClient
      .patch<Todo>(`${TODOS_API_URL}/${id}`, dto, { observe: 'response' })
      .subscribe({
        next: (res) => {
          if (res.status !== 200 || !res.body) return;

          const updatedTodos = [
            ...this.todos$.getValue().filter((todo) => todo.id !== id),
            res.body,
          ];

          this.todos$.next(updatedTodos);
        },
        error: this.handleError,
      });
  }

  completeTodo(id: number) {
    this.httpClient
      .patch<Todo>(
        `${TODOS_API_URL}/complete/${id}`,
        {},
        {
          observe: 'response',
        }
      )
      .subscribe({
        next: (res) => {
          if (res.status !== 200 || !res.body) return;

          const updatedTodos = [
            ...this.todos$.getValue().filter((todo) => todo.id !== id),
            res.body,
          ];

          this.todos$.next(updatedTodos);
        },
        error: this.handleError,
      });
  }

  private getAllTodos() {
    const auth = this.authService.auth$.getValue();
    if (!auth) return;

    this.httpClient
      .get<Todo[]>(TODOS_API_URL + `?userId=${auth.id}`)
      .subscribe({
        next: (res) => {
          this.todos$.next(res);
        },
        error: this.handleError,
      });
  }

  private handleError(err: any) {
    console.log(err);
    this.errAlertService.showErrorAlert(
      `Something went wrong: ${err?.error?.message}`
    );
  }
}
