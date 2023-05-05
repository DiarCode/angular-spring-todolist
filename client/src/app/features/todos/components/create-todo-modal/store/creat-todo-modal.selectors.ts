import { createFeatureSelector } from '@ngrx/store';

export const selectCreateTodoModalState =
  createFeatureSelector<boolean>('createTodoModal');
