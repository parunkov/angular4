import { Component } from '@angular/core';
import { PostFormComponent } from './post-form/post-form.component';
import { PostComponent } from './post/post.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [PostFormComponent, PostComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'angular4';
}
