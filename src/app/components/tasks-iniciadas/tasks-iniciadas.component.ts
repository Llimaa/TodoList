import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Task } from 'src/app/interfaces/task.interface';
import { TasksService } from '../../services/todo.service';
import { Store } from '../../todo-list/todo.store';


@Component({
  selector: 'tasks-iniciadas',
  templateUrl: './tasks-iniciadas.component.html'
})
export class TasksIniciadasComponent implements OnInit {

  iniciados$!: Observable<Task[]>;

  constructor(private taskService: TasksService, private store: Store) { }

  ngOnInit() {
    this.iniciados$ = this.store.getTodoList()
      .pipe(
        map(
          todolist => todolist.filter(task => task.iniciado)
        )
      );
  }

  onToggle(event: any): void {
    this.taskService.toggle(event);
  }
}