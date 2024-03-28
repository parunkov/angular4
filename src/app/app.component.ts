import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { FilterPipe } from './pipes/filter.pipe';

export interface Post {
  title: string;
  text: string;
  [index: string]: any;
}

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, FormsModule, FilterPipe],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})

export class AppComponent  {

  search = '';
  searchField = 'title';

  posts: Post[] = [
    {title: 'Beer', text: 'Самое лучшее пиво в мире'},
    {title: 'Bred', text: 'The best bread in the world'},
    {title: 'Javascript', text: 'The best language in the world'},
  ];
}
