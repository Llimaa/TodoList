import { Component } from '@angular/core';
import { Task } from '../interfaces/task.interface';
import { TasksService } from '../services/todo.service';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent {

  constructor(private tasksService: TasksService) {

  }

  taskName: string = '';

  addTask(): void {
    if (this.taskName.length > 0) {

      const task: Task = {
        id: 0,
        nome: this.taskName,
        iniciado: false,
        finalizado: false
      }
      const value = { task: task };
      this.tasksService.toggle(value);
      this.taskName = '';
    }
  }
}