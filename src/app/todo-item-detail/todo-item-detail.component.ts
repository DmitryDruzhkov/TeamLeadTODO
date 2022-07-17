import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TodoItem } from '../todo/shared/interfaces';

@Component({
  selector: 'app-todo-item-detail',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './todo-item-detail.component.html',
  styleUrls: ['./todo-item-detail.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TodoItemDetailComponent {
  @Input() item: TodoItem;
}
