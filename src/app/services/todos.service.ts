import { HttpClient, HttpEventType, HttpHeaders, HttpParams } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable, catchError, delay, map, tap, throwError } from "rxjs";

export interface Todo {
    completed: boolean;
    title: string;
    id?: number;
}

@Injectable({ providedIn: 'root' })
export class TodosService {
    constructor(private http: HttpClient) { }

    addTodo(todo: Todo): Observable<Todo> {
        const headers = new HttpHeaders({
            'MyCustomHeader': Math.random().toString()
        })
        return this.http.post<Todo>('https://jsonplaceholder.typicode.com/todos', todo, {
            headers
            // headers: new HttpHeaders({
            //     'MyCustomHeader': Math.random().toString()
            // })
        })
    }

    fetchTodos(): Observable<Todo[] | null> {
        let params = new HttpParams();
        params = params.append('_limit', '4');
        params = params.append('custom', 'anything');
        return this.http.get<Todo[]>('https://jsonplaceholder.typicode.com/todos',
            {
                params,
                observe: 'response'
                // params: new HttpParams().set('_limit', '3')
            }
        )
            .pipe(
                map(response => {
                    // console.log('Response: ', response);
                    return response.body
                }),
                delay(500),
                catchError(error => {
                    console.log('Error: ', error.message);
                    return throwError(error);
                })
            )
    }

    removeTodo(id: number | undefined): Observable<any> {
        return this.http.delete<void>(`https://jsonplaceholder.typicode.com/todos/${id}`, {
            observe: 'events'
        }).pipe(
            tap(event => {
                if (event.type === HttpEventType.Sent) {
                    console.log("Sent: ", event);
                }
                if (event.type === HttpEventType.Response) {
                    console.log('Response: ', event);
                    
                }
            })
        )
    }

    completeTodo(id: number | undefined): Observable<Todo> {
        return this.http.put<Todo>(`https://jsonplaceholder.typicode.com/todos/${id}`, {
            completed: true
        }, {
            responseType: 'json'
        })
    }
}