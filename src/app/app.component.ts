import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'todo';
  todos: Array<any> = [
    {id: 1, content: 'Buy milk', completed: true},
    {id: 2, content: 'Make bed', completed: false},
  ];
  todosCompleted = true;

  constructor() {}

}
