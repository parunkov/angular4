import { Component, OnInit } from '@angular/core';
import { PostFormComponent } from './post-form/post-form.component';
import { PostComponent } from './post/post.component';
import { NgFor, NgIf } from '@angular/common';

export interface Post {
  title: string;
  text: string;
  id?: number;
}

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [PostFormComponent, PostComponent, NgFor, NgIf],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit {
  title = 'angular4';
  posts: Post[] = [
    {title: 'Post 1', text: 'Prosto text posta', id: 1},
    {title: 'Post 2', text: 'Prosto text vtorogo posta', id: 2},
  ];

  ngOnInit(): void {
    // setTimeout(() => {
    //   console.log('timeout');
    //   // this.posts[0].title = 'changed';
    //   this.posts[0] = {title: 'canged2', text: 'new text', id: 33};
    // }, 5000)
  }

  updateFormPosts(post: Post) {
    // console.log(post);
    this.posts.unshift(post)
  };

  removePost(id: number) {
    console.log(id);
    this.posts = this.posts.filter(p => p.id !== id);
  }
}
