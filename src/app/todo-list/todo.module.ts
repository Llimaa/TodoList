import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { TasksFinalizadasComponent } from '../components/tasks-finalizadas/tasks-finalizadas.component';
import { TasksIniciadasComponent } from '../components/tasks-iniciadas/tasks-iniciadas.component';
import { TasksComponent } from '../components/tasks/tasks.component';
import { ToDoListComponent } from '../components/todo-list/todo-list.component';
import { TasksService } from '../services/todo.service';
import { TodoComponent } from './todo.component';
import { Store } from './todo.store';

@NgModule({
  imports: [
    CommonModule,
    HttpClientModule,
    FormsModule,
    MatInputModule,
    MatButtonModule
  ],
  providers: [
    TasksService,
    Store
  ],
  declarations: [
    TodoComponent,
    TasksIniciadasComponent,
    ToDoListComponent,
    TasksComponent,
    TasksFinalizadasComponent,
  ],
  exports: [
    TodoComponent,
    TasksFinalizadasComponent,
    TasksIniciadasComponent,
    TasksComponent,
    ToDoListComponent,
  ]
})
export class TodoModule { }