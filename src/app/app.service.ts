import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';

@Injectable()

export class AppService {
  todos: Array<any> = [
    {id: 1, content: 'Buy milk', completed: true},
    {id: 2, content: 'Make bed', completed: false},
  ];
  constructor(private httpClient: HttpClient) {}

  getTodos() {
    return of(this.todos);
  }

  completeTodo(id: number) {
    const todo = this.todos.filter(item => item.id === id)[0];
    todo.completed = true;
    return of(this.todos);
  }
}
