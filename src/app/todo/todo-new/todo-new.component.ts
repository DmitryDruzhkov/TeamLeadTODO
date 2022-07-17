import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TodoItemsService } from '../services/todo-items.service';
import { createTask } from '../shared/todo-helper';
import { TodoNewInputComponent } from '../todo-new-input/todo-new-input.component';
import { MatDividerModule } from '@angular/material/divider';

@Component({
  selector: 'app-todo-new',
  standalone: true,
  imports: [
    CommonModule,
    TodoNewInputComponent,
    MatDividerModule,
  ],
  templateUrl: './todo-new.component.html',
  styleUrls: ['./todo-new.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TodoNewComponent {

  private todoItemsService = inject(TodoItemsService);

  public onCreateItem(description: string): void {
    if (description) {
      this.todoItemsService.addItem(createTask(description));
    }
  }
}
