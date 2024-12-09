import { Component, inject, OnInit, signal } from '@angular/core';
import { TodoService } from '../services/todo.service';
import { Todo } from '../model/todo.type';
import { catchError } from 'rxjs';
import { NgIf } from '@angular/common';

@Component({
  selector: 'app-todos',
  standalone: true,
  imports: [NgIf],
  templateUrl: './todos.component.html',
  styleUrl: './todos.component.scss',
})
export class TodosComponent implements OnInit {
  todoService = inject(TodoService);
  todoItems = signal<Array<Todo>>([]);
  ngOnInit(): void {
   this.todoService.getTodosFromApi()
   .pipe(
    catchError((err) => {
      console.log(err)
      throw err;
    })
   )
   .subscribe((todos) => {
    this.todoItems.set(todos)
   })
  }
}
