import { CommonModule } from '@angular/common';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { delay } from 'rxjs';

export interface Todo {
  completed: boolean;
  title: string;
  id?: number;
}

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, FormsModule, HttpClientModule],
  providers: [],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})

export class AppComponent implements OnInit {

  todos: Todo[] = [];
  todoTitle = '';
  loading = false;

  constructor(private http: HttpClient) {}
  ngOnInit(): void {
    this.fetchTodos();
  }

  addTodo () {
    if (!this.todoTitle.trim()) {
      return;
    }
    const newTodo: Todo = {
      title: this.todoTitle,
      completed: false
    }
    
    this.http.post<Todo>('https://jsonplaceholder.typicode.com/todos', newTodo).subscribe(todo => {
      console.log(todo);
      this.todos.push(todo);
      this.todoTitle = '';
    })
  }

  fetchTodos() {
    this.loading = true;
    this.http.get<Todo[]>('https://jsonplaceholder.typicode.com/todos?_limit=2')
      .pipe(delay(1500))
      .subscribe(todos => {
      this.todos = todos;
      this.loading = false;
    })
  }
}
