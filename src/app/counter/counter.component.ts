import { Component } from '@angular/core';
import { AppCounterService } from '../services/app-counter.service';
import { LocalCounterService } from '../services/local-counter.service';

@Component({
  selector: 'app-counter',
  standalone: true,
  imports: [],
  providers: [LocalCounterService],
  templateUrl: './counter.component.html',
  styleUrl: './counter.component.scss'
})
export class CounterComponent {
  constructor(
    public appCounterService: AppCounterService,
    public localCounterService: LocalCounterService
    ) {}
}
