import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatInputModule } from '@angular/material/input';
import { FormControl, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TodoItemsService } from '../services/todo-items.service';
import { TodoItem } from '../shared/interfaces';

@Component({
  selector: 'app-todo-new',
  standalone: true,
  imports: [
    CommonModule,
    MatInputModule,
    FormsModule,
    ReactiveFormsModule,],
  templateUrl: './todo-new.component.html',
  styleUrls: ['./todo-new.component.scss']
})
export class TodoNewComponent {

  public descriptionFormControl = new FormControl('');
  private todoItemsService = inject(TodoItemsService);

  public onCreateItem(): void {
    const description: string | null = this.descriptionFormControl.value;
    if (description) {
      this.todoItemsService.addItem(this.getNewItem(description));
      this.descriptionFormControl.patchValue('');
    }
  }

  private getNewItem(description: string): TodoItem {
    return {
      id: new Date().getTime(),
      description,
      complited: false
    }
  }
}
