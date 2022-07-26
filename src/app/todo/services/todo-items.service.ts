import { Injectable } from '@angular/core';
import { BehaviorSubject, map, Observable } from 'rxjs';
import { TodoStates } from '../shared/constants';
import { TodoItem } from '../shared/interfaces';
import { todoItemsMock } from '../shared/moc';

@Injectable({
  providedIn: 'root'
})
export class TodoItemsService {

  public allTodoItems$: BehaviorSubject<TodoItem[]> = new BehaviorSubject(todoItemsMock);
  
  public todayItems$: Observable<TodoItem[]> = this.allTodoItems$.pipe(map((items: TodoItem[]) => this.getTodayItems(items)));
  public historyItems$: Observable<TodoItem[]> = this.allTodoItems$.pipe(map((items: TodoItem[]) => this.getHistoryItems(items)));
  public backlogItems$: Observable<TodoItem[]> = this.allTodoItems$.pipe(map((items: TodoItem[]) => this.getBacklogItems(items)));

  public addItem(item: TodoItem): void {
    this.allTodoItems$.next([...this.allTodoItems$.getValue().concat([item])])
  }

  public deleteItem(itemIndex: number): void {
    this.allTodoItems$.next(this.allTodoItems$.getValue().splice(itemIndex, 1))
  }

  private getTodayItems(items: TodoItem[]): TodoItem[] {
    const today = new Date().setHours(0, 0, 0, 0);
    return items.filter((item) => item.state === TodoStates.IN_PROGRESS || item.complitedDay === today);
  }

  private getHistoryItems(items: TodoItem[]): TodoItem[] {
    return items.filter((item) => item.state === TodoStates.COMPLITED);
  }

  private getBacklogItems(items: TodoItem[]): TodoItem[] {
    return items.filter((item) => item.state === TodoStates.BACKLOG);
  }
}
