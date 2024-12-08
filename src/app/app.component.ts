import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { HeaderComponent } from './component/header/header.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HomeComponent, HeaderComponent],
  template: `
    <not-me />
    <app-home />
  `,
  styles: [],
})
export class AppComponent {
  title = 'first-ng-app';
}
