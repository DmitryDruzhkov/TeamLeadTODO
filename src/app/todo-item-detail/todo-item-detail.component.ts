import { ChangeDetectionStrategy, Component, EventEmitter, Inject, Input, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TodoItem } from '../todo/shared/interfaces';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-todo-item-detail',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './todo-item-detail.component.html',
  styleUrls: ['./todo-item-detail.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TodoItemDetailComponent {
  @Output() deleteItem: EventEmitter<null> = new EventEmitter();

  public item: TodoItem;

  constructor(@Inject(MAT_DIALOG_DATA) public data: any) {
    this.item = this.data.item
  }

  public onDeleteItem(): void {
    this.deleteItem.emit();
  }
}
