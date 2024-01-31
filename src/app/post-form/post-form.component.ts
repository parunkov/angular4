import { Component, ElementRef, EventEmitter, Output, ViewChild } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Post } from '../app.component';

@Component({
  selector: 'app-post-form',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './post-form.component.html',
  styleUrl: './post-form.component.scss'
})
export class PostFormComponent {
  @Output() onAdd: EventEmitter<Post> = new EventEmitter<Post>();
  @ViewChild('titleInput', {static: false}) inputRef: ElementRef;

  title = '';
  text = '';

  addPost() {
    if (this.text.trim() && this.title.trim()) {
      const post: Post = {
        title: this.title,
        text: this.text
      }
      this.onAdd.emit(post);
      // console.log(post);
      this.title = this.text = '';
    }
  };

  focusTitle() {
    this.inputRef.nativeElement.focus();
  };
}
