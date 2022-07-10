import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { TodoItem } from '../shared/interfaces';
import { closedTodoItemsMock, todoItemsMock } from '../shared/moc';

@Injectable({
  providedIn: 'root'
})
export class TodoItemsService {

  public openItems$: BehaviorSubject<TodoItem[]> = new BehaviorSubject(todoItemsMock);
  public closedItems$: BehaviorSubject<TodoItem[]> = new BehaviorSubject(closedTodoItemsMock);

  constructor() { }

  public addItem(item: TodoItem): void {
    this.openItems$.next([...this.openItems$.getValue().concat([item])])
  }
}
