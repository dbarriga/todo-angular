import { Component, OnInit } from '@angular/core';
import { AppService } from './app.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'todo';
  todos: Array<any>;
  todosCompleted = true;

  constructor(private service: AppService) {}

  ngOnInit() {
    this.service.getTodos().subscribe(data => this.todos = data);
  }

  completeTodo(id: number) {
    this.service.completeTodo(id).subscribe(data => this.todos = data);
  }

}
