import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { TodoService } from '../../services/todo.service';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
})
export class HeaderComponent {
   title = 'My Angular Application'
}
