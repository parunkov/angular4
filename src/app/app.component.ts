import { Component } from '@angular/core';
import { PostFormComponent } from './post-form/post-form.component';
import { PostComponent } from './post/post.component';
import { NgFor } from '@angular/common';

export interface Post {
  title: string;
  text: string;
  id?: number;
}

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [PostFormComponent, PostComponent, NgFor],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'angular4';
  posts: Post[] = [
    {title: 'Post 1', text: 'Prosto text posta', id: 1},
    {title: 'Post 2', text: 'Prosto text vtorogo posta', id: 2},
  ];
}
