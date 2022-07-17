import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, inject, Input, OnInit } from '@angular/core';
import { TodoItem } from '../shared/interfaces';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatDividerModule } from '@angular/material/divider'; 
import { RouterModule } from '@angular/router';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { TodoListComponent } from '../todo-list/todo-list.component';
import { BehaviorSubject } from 'rxjs';
import { TodoNewInputComponent } from '../todo-new-input/todo-new-input.component';
import { createTask } from '../shared/todo-helper';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { TodoItemDetailComponent } from 'src/app/todo-item-detail/todo-item-detail.component';

@Component({
  standalone: true,
  imports: [
    CommonModule,
    MatCheckboxModule,
    MatDividerModule,
    RouterModule,
    MatIconModule,
    MatButtonModule,
    TodoListComponent,
    TodoNewInputComponent,
    TodoItemDetailComponent,
  ],
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TodoItemComponent implements OnInit {
  @Input() item: TodoItem;

  public dialog: MatDialog = inject(MatDialog);
  public isCreateSubTusk$: BehaviorSubject<boolean> = new BehaviorSubject(false);

  public ngOnInit(): void {
  }

  public onSetComplite(): void {
    this.item.complited = !this.item?.complited;
  }

  public onChangeVisibleNewTodo(): void {
    this.isCreateSubTusk$.next(!this.isCreateSubTusk$.getValue());
  }

  public onCreateSubTask(description: string): void {
    this.onChangeVisibleNewTodo();
    this.item?.subtasks.push(createTask(description));
  }

  public onSetType(): void {
    
  }

  public onOpenItemDialog(): void {
    const dialogRef: MatDialogRef<TodoItemDetailComponent, any> = this.dialog.open(TodoItemDetailComponent, {
      width: '400px',
    });
  }
}
