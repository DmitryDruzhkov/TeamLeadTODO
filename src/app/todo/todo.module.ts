import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TodoItemComponent } from './todo-item/todo-item.component';
import { TodoListComponent } from './todo-list/todo-list.component';



@NgModule({
  declarations: [
    TodoItemComponent,
    TodoListComponent
  ],
  imports: [
    CommonModule
  ]
})
export class TodoModule { }
