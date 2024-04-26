import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { PostsService } from '../post.service';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-posts',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './posts.component.html',
  styleUrl: './posts.component.scss'
})
export class PostsComponent {
  constructor(public postsService: PostsService) {}
}
