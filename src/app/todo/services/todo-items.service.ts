import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { TodoItem } from '../shared/interfaces';
import { backlogTodoItemsMock, historyTodoItemsMock, todoItemsMock } from '../shared/moc';

@Injectable({
  providedIn: 'root'
})
export class TodoItemsService {

  public todayItems$: BehaviorSubject<TodoItem[]> = new BehaviorSubject(todoItemsMock);
  public historyItems$: BehaviorSubject<TodoItem[]> = new BehaviorSubject(historyTodoItemsMock);
  public backlogItems$: BehaviorSubject<TodoItem[]> = new BehaviorSubject(backlogTodoItemsMock);

  constructor() { }

  public addItem(item: TodoItem): void {
    this.todayItems$.next([...this.todayItems$.getValue().concat([item])])
  }

  public createNewDay(): void {
    const newDeayItem: TodoItem[] = [];
    const closedItems: TodoItem[] = [];
    
    this.todayItems$.getValue().forEach((item: TodoItem) => {
      if (item.complited) {
        closedItems.push(item);
      } else {
        newDeayItem.push(item);
      }
    });

    this.historyItems$.next([...this.historyItems$.getValue(), ...closedItems]);
    this.todayItems$.next(newDeayItem);
  }
}
