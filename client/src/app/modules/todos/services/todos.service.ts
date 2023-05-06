import { BehaviorSubject, combineLatest, map } from 'rxjs';
import { Injectable } from '@angular/core';
import { Todo } from '@app/shared/types/todo/todo.type';
import { CreateTodoApiDto, CreateTodoDto } from '../types/create-todo.dto';
import { HttpClient } from '@angular/common/http';
import { API_URL } from '@app/shared/constants/api.url';
import { TodosFilters } from '../components/todos-filter/todos-filters.enum';
import { UpdateTodoDto } from '../types/update-todo.dto';

const TODOS_API_URL = `${API_URL}/todos`;

@Injectable()
export class TodosService {
  constructor(private httpClient: HttpClient) {}

  todos$ = new BehaviorSubject<Todo[]>([]);
  filter$ = new BehaviorSubject<TodosFilters>(TodosFilters.All);

  setFilter(value: TodosFilters) {
    this.filter$.next(value);
  }

  createTodo(dto: CreateTodoDto): void {
    const apiDto: CreateTodoApiDto = {
      ...dto,
      userId: 1,
    };

    this.httpClient.post<Todo>(TODOS_API_URL, apiDto).subscribe((res) => {
      const updatedTodos = [...this.todos$.getValue(), res];
      this.todos$.next(updatedTodos);
    });
  }

  private getAllTodos() {
    this.httpClient
      .get<Todo[]>(TODOS_API_URL + '?_limit=2')
      .subscribe((res) => {
        console.log(res);
        this.todos$.next(res);
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
      .subscribe((res) => {
        if (res.status !== 200) return;

        const updatedTodos = this.todos$
          .getValue()
          .filter((todo) => todo.id !== id);

        this.todos$.next(updatedTodos);
      });
  }

  updateTodo(id: number, dto: UpdateTodoDto) {
    this.httpClient
      .post<Todo>(`${TODOS_API_URL}/${id}`, dto, { observe: 'response' })
      .subscribe((res) => {
        if (res.status !== 200 || !res.body) return;

        const updatedTodos = [
          ...this.todos$.getValue().filter((todo) => todo.id !== id),
          res.body,
        ];

        this.todos$.next(updatedTodos);
      });
  }

  completeTodo(id: number) {
    this.httpClient
      .put<Todo>(
        `${TODOS_API_URL}/complete/${id}`,
        {},
        {
          observe: 'response',
        }
      )
      .subscribe((res) => {
        if (res.status !== 200 || !res.body) return;

        const updatedTodos = [
          ...this.todos$.getValue().filter((todo) => todo.id !== id),
          res.body,
        ];

        this.todos$.next(updatedTodos);
      });
  }
}
