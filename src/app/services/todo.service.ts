import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import { Task } from '../interfaces/task.interface';
import { Store } from '../todo-list/todo.store';


@Injectable()
export class TasksService {

  constructor(private http: HttpClient, private store: Store) { }

  getTodoList$: Observable<Task[]> = this.http
    .get<Task[]>(`${environment.baseUrlApi}`)
    .pipe(
      tap(next => this.store.set('todolist', next)));

  toggle(event: any): void {
    if (event.task.id > 0) {
      this.put(event);
    } else {
      this.post(event);
    }
  }

  private post(event: any): void {
    this.http.post(`${environment.baseUrlApi}`, event.task).subscribe((res: any) => {
      const todolist = this.store.value.todolist;
      todolist.push(res);
      this.store.set('todolist', todolist);
    })
  }

  private put(event: any): void {
    this.http.put(`${environment.baseUrlApi}/${event.task.id}`, event.task)
      .subscribe(() => {
        const value = this.store.value.todolist;
        const todolist = value.map(
          (task: Task) => {
            if (event.task.id === task.id) {
              return { ...task, ...event.task }
            } else {
              return task;
            }
          });
        this.store.set('todolist', todolist);
      });
  }



  /* getToDoList(): Observable<Task[]> {
    return this.http
      .get<Task[]>('http://localhost:3000/todolist');
  } */
}