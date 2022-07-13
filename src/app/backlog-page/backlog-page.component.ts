import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TodoItemsService } from '../todo/services/todo-items.service';
import { TodoItemComponent } from '../todo/todo-item/todo-item.component';
import { TodoItem } from '../todo/shared/interfaces';

@Component({
  selector: 'app-backlog-page',
  standalone: true,
  imports: [
    CommonModule,
    TodoItemComponent,
  ],
  templateUrl: './backlog-page.component.html',
  styleUrls: ['./backlog-page.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class BacklogPageComponent {

  public backlogTodoItems$ = inject(TodoItemsService).backlogItems$;

  public trackBy(id: number, item: TodoItem): number {
    return item.id;
  }

}
