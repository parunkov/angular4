import { Component } from '@angular/core';
import { StyleDirective } from './directives/style.directive';
import { NgIf } from '@angular/common';
import { IfnotDirective } from './directives/ifnot.directive';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [StyleDirective, NgIf, IfnotDirective],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent  {
  isVisible = true;
}
