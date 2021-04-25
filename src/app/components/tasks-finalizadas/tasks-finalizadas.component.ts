import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Task } from 'src/app/interfaces/task.interface';
import { TasksService } from '../../services/todo.service';
import { Store } from '../../todo-list/todo.store';


@Component({
  selector: 'tasks-finalizadas',
  templateUrl: './tasks-finalizadas.component.html'
})
export class TasksFinalizadasComponent implements OnInit {

  finalizados$!: Observable<Task[]>;

  constructor(private taskService: TasksService, private store: Store) {
    this.finalizados$ = new Observable<Task[]>();
  }

  ngOnInit() {
    this.finalizados$ = this.store.getTodoList()
      .pipe(
        map(todolist => todolist.filter(task => task.finalizado))
      );
  }

  onToggle(event: any): void {
    this.taskService.toggle(event);
  }
}