import { Component, OnInit } from '@angular/core';
import { AppService } from './app.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  todoInput = '';
  todos: Array<any>;
  todosCompleted = false;
  selected = 'all';

  constructor(private service: AppService) {}

  ngOnInit() {
    this.service.getTodos().subscribe(data => this.todos = data);
  }

  completeTodo(id: number) {
    this.service.completeTodo(id).subscribe(data => this.todos = data);
  }

  addTodo() {
    const todo = {
      id: this.todos.length + 1,
      content: this.todoInput,
      completed: false
    };
    this.service.addTodo(todo).subscribe(data => {
      this.todos = data;
      this.todoInput = '';
    });
  }

  sort() {
    this.todos.sort((a, b) => (a.completed > b.completed) ? 1 : -1);
  }

}
