import { Component, input } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-greeting',
  standalone: true,
  imports: [],
  templateUrl: './greeting.component.html',
  styleUrl: './greeting.component.scss'
})
export class GreetingComponent {
  message = input('Hello, hello!');
}
