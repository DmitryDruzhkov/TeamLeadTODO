import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, ChangeDetectorRef, Component, inject, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { TodoItemsService } from '../todo/services/todo-items.service';
import { TodoItem } from '../todo/shared/interfaces';
import { TodoItemComponent } from '../todo/todo-item/todo-item.component';
import { TodoItemsListComponent } from '../todo/todo-items-list/todo-items-list.component';
import { TodoNewComponent } from '../todo/todo-new/todo-new.component';

@Component({
  standalone: true,
  imports: [
    CommonModule,
    TodoNewComponent,
    /* TodoItemsListComponent, */
    TodoItemComponent
  ],
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MainPageComponent {

  private todoItemsService = inject(TodoItemsService);
  public items$: Observable<TodoItem[]> = this.todoItemsService.todayItems$;

  private changeDetectorRef = inject(ChangeDetectorRef);

  public trackBy(id: number, item: TodoItem): number {
    return item.id;
  }

  public onDelete(itemIndex: number): void {
    this.todoItemsService.deleteItem(itemIndex);
    this.changeDetectorRef.detectChanges();
  }

}
