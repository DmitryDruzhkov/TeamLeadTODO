import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, ChangeDetectorRef, Component, EventEmitter, inject, Input, OnDestroy, OnInit, Output } from '@angular/core';
import { TodoItem } from '../shared/interfaces';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatDividerModule } from '@angular/material/divider'; 
import { RouterModule } from '@angular/router';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { BehaviorSubject, Subscription } from 'rxjs';
import { TodoNewInputComponent } from '../todo-new-input/todo-new-input.component';
import { createTask } from '../shared/todo-helper';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { TodoItemDetailComponent } from 'src/app/todo-item-detail/todo-item-detail.component';
import { TodoStates } from '../shared/constants';
import { TodoItemsService } from '../services/todo-items.service';
import { TodoItemsListComponent } from '../todo-items-list/todo-items-list.component';

@Component({
  standalone: true,
  imports: [
    CommonModule,
    MatCheckboxModule,
    MatDividerModule,
    RouterModule,
    MatIconModule,
    MatButtonModule,
    TodoNewInputComponent,
    TodoItemDetailComponent,
    /* TodoItemsListComponent, */
  ],
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TodoItemComponent implements OnInit, OnDestroy {
  @Input() item: TodoItem;
  @Output() delete: EventEmitter<null> = new EventEmitter();

  public dialog: MatDialog = inject(MatDialog);
  public isCreateSubTusk$: BehaviorSubject<boolean> = new BehaviorSubject(false);
  public todoStates = TodoStates;

  private todoItemsService = inject(TodoItemsService);
  private changeDetectorRef = inject(ChangeDetectorRef);

  private dialogSubscribe: Subscription;

  public ngOnInit(): void {
  }

  public ngOnDestroy(): void {
    this.dialogSubscribe.unsubscribe();
  }

  public onSetComplite(): void {
    this.item.state = this.item.state === TodoStates.IN_PROGRESS ? TodoStates.COMPLITED : TodoStates.IN_PROGRESS;
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

  public onDelete(itemIndex: number): void {
    this.item.subtasks.splice(itemIndex, 1);
    this.changeDetectorRef.detectChanges();
  }

  public onOpenItemDialog(): void {
    const dialogRef: MatDialogRef<TodoItemDetailComponent, any> = this.dialog.open(TodoItemDetailComponent, {
      width: '400px',
      data: {
        item: this.item,
      }
    });

    this.dialogSubscribe = dialogRef.componentInstance.deleteItem.subscribe(() => {
      /* this.todoItemsService.deleteItem(this.item); */
      this.delete.emit();
      dialogRef.close();
      this.dialogSubscribe.unsubscribe();
    })
  }
}
