import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, Input, OnInit } from '@angular/core';
import { TodoItem } from '../shared/interfaces';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatDividerModule } from '@angular/material/divider'; 
import { RouterModule } from '@angular/router';
import { createTask } from '../shared/todo-helper';

@Component({
  standalone: true,
  imports: [CommonModule, MatCheckboxModule, MatDividerModule, RouterModule],
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TodoItemComponent implements OnInit {
  @Input() item: TodoItem | undefined;

  constructor() { }

  public ngOnInit(): void {
  }

  public onSetComplite(): void {

  }

  public onCreateSubTask(): void {
    this.item?.subtasks.push(createTask(''));
  }

}
