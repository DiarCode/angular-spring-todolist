import { createActionGroup, props } from '@ngrx/store';

export const CreateTodoModalActions = createActionGroup({
  source: 'CreateTodoModal',
  events: {
    'Change Modal State': props<{ visible: boolean }>(),
  },
});
