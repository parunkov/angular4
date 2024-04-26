import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router, RouterLink } from '@angular/router';
import { Post, PostsService } from '../post.service';

@Component({
  selector: 'app-post',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './post.component.html',
  styleUrl: './post.component.scss',
})
export class PostComponent implements OnInit {
  post: Post | undefined
  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private postService: PostsService
  ) {}
  ngOnInit(): void {
    this.route.params.subscribe((params: Params) => {
      console.log('Params: ', params);
      this.post = this.postService.getById(+params.id)
    })
  }

  loadPost() {
    this.router.navigate(['/posts', 44]);
  }
}
