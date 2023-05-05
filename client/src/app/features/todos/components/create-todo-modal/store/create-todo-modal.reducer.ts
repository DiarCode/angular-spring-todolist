import { createReducer, on } from '@ngrx/store';
import { CreateTodoModalActions } from './create-todo-modal.actions';

export const initialState = false;

export const createTodoModalReducer = createReducer(
  initialState,
  on(CreateTodoModalActions.changeModalState, (state, { visible }) => visible)
);
