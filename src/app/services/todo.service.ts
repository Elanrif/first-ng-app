import { Injectable } from '@angular/core';
import { Todo } from '../model/todo.type';

@Injectable({
  providedIn: 'root'
})
export class TodoService {
  todoItems: Array<Todo> = [
  {
    title: 'groceries',
    id: 0,
    userId: 0,
    completed: false,
  },
  {
    title: 'laundry',
    id: 1,
    userId: 1,
    completed: true,
  },
  {
    title: 'homework',
    id: 2,
    userId: 0,
    completed: false,
  },
  {
    title: 'exercise',
    id: 3,
    userId: 2,
    completed: true,
  },
  {
    title: 'call mom',
    id: 4,
    userId: 1,
    completed: false,
  },
];

  constructor() { }
}
