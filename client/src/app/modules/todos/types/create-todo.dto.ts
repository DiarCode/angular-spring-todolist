import { Todo } from '@app/shared/types/todo/todo.type';

export type CreateTodoDto = Pick<Todo, 'title' | 'deadline'>;

export type CreateTodoApiDto = Pick<Todo, 'title' | 'deadline' | 'userId'>;
