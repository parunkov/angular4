import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppCounterService } from './services/app-counter.service';
import { LocalCounterService } from './services/local-counter.service';
import { CounterComponent } from './counter/counter.component';

export interface Post {
  title: string;
  text: string;
  [index: string]: any;
}

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, FormsModule, CounterComponent],
  providers: [LocalCounterService],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})

export class AppComponent {
  constructor(
    public appCounterService: AppCounterService,
    public localCounterService: LocalCounterService
    ) {}
}
