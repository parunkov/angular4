import { Component } from '@angular/core';
import { StyleDirective } from './directives/style.directive';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [StyleDirective],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent  {
}
