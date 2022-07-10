import { CommonModule } from '@angular/common';
import { Component, inject, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { TodoItemsService } from '../services/todo-items.service';
import { TodoItem } from '../shared/interfaces';
import { TodoItemComponent } from '../todo-item/todo-item.component';
import { TodoNewComponent } from '../todo-new/todo-new.component';

@Component({
  standalone: true,
  imports: [
    CommonModule,
    TodoNewComponent,
    TodoItemComponent,
  ],
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.scss']
})
export class TodoListComponent implements OnInit {

  public items$: Observable<TodoItem[]> = inject(TodoItemsService).openItems$;

  constructor() { }

  ngOnInit(): void {
  }

  trackBy(id: number, item: TodoItem): number {
    return item.id;
  }

}
