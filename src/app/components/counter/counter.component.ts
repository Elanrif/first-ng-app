import { Component, signal } from '@angular/core';

@Component({
  selector: 'app-counter',
  standalone: true,
  imports: [],
  templateUrl: './counter.component.html',
  styleUrl: './counter.component.scss'
})
export class CounterComponent {
  countervalue = signal(0);
  increment() {
    this.countervalue.set(this.countervalue() + 1);
  }

  decrement() {
    this.countervalue.set(this.countervalue() - 1);
  }

  reset() {
    this.countervalue.set(0);
  }
}
