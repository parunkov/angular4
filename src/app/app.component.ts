import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { MultByPipe } from './pipes/mult-by.pipe';
import { ExMarksPipe } from './pipes/ex-marks.pipe';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, MultByPipe, ExMarksPipe],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent  {
  e: number = Math.E;
  str = 'hello world';
  date: Date = new Date();
  float: number = 0.42;
  obj = {
    a: 1,
    b: {
      c: 2,
      d: {
        e: 3,
        f: 4
      }
    }
  }
}
