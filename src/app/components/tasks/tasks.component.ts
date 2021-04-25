import { Component, OnDestroy, OnInit } from '@angular/core';
import { Observable, Subscription } from 'rxjs';
import { map } from 'rxjs/operators';
import { Task } from 'src/app/interfaces/task.interface';
import { TasksService } from '../../services/todo.service';
import { Store } from '../../todo-list/todo.store';


@Component({
  selector: 'tasks',
  templateUrl: './tasks.component.html'
})
export class TasksComponent implements OnInit, OnDestroy {

  todolist$!: Observable<Task[]>
  subscription!: Subscription

  constructor(private taskService: TasksService, private store: Store) { }

  ngOnInit() {
    this.todolist$ = this.store.getTodoList()
      .pipe(
        map(todolist => todolist.filter(task => !task.finalizado && !task.iniciado))
      );

    this.subscription = this.taskService.getTodoList$.subscribe();
  }

  onToggle(event: any): void {
    this.taskService.toggle(event);
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}