import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TodoItemsService } from '../todo/services/todo-items.service';
import { TodoItem } from '../todo/shared/interfaces';
import { TodoItemComponent } from '../todo/todo-item/todo-item.component';

@Component({
  selector: 'app-history-page',
  standalone: true,
  imports: [
    CommonModule,
    TodoItemComponent,
  ],
  templateUrl: './history-page.component.html',
  styleUrls: ['./history-page.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HistoryPageComponent {

  public historyItems$ = inject(TodoItemsService).historyItems$;

  public trackBy(id: number, item: TodoItem): number {
    return item.id;
  }

}
