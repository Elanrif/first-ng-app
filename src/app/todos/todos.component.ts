import { Component, inject } from '@angular/core';
import { TodoService } from '../services/todo.service';

@Component({
  selector: 'app-todos',
  standalone: true,
  imports: [],
  templateUrl: './todos.component.html',
  styleUrl: './todos.component.scss'
})
export class TodosComponent {
    todoService= inject(TodoService)
}
