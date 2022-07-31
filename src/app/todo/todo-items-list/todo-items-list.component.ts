import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TodoItemComponent } from '../todo-item/todo-item.component';
import { TodoItem } from '../shared/interfaces';
import { CdkDragDrop, DragDropModule, moveItemInArray } from '@angular/cdk/drag-drop';

@Component({
  selector: 'app-todo-items-list',
  standalone: true,
  imports: [
    CommonModule,
    TodoItemComponent,
    DragDropModule,
  ],
  templateUrl: './todo-items-list.component.html',
  styleUrls: ['./todo-items-list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TodoItemsListComponent {
  @Input() items: TodoItem[];

  constructor() {
    this.items = [];
  }

  ngOnChange() {
    console.log(this.items);
  }

  public trackBy(id: number, item: TodoItem): number {
    return item.id;
  }

  public onDelete(item: TodoItem): void {

  }

  public drop(event: CdkDragDrop<TodoItem[]>) {
    moveItemInArray(this.items, event.previousIndex, event.currentIndex);
    console.log(this.items);
  }
}
