import { Component, Input } from '@angular/core';
import { Todo } from '@app/shared/types/todo/todo.type';

@Component({
  selector: 'app-todos-list',
  templateUrl: './todos-list.component.html',
})
export class TodosListComponent {
  @Input() todos: Todo[] = [
    {
      id: 1,
      title: 'Client Review & Feedback',
      userId: 1,
      deadline: new Date(),
      completed: false,
    },
    {
      id: 2,
      title: 'Create a Wireframe',
      userId: 1,
      deadline: new Date(),
      completed: false,
    },
    {
      id: 3,
      title: 'Send email to Systen Analyst',
      userId: 1,
      deadline: new Date(),
      completed: true,
    },
  ];
}
