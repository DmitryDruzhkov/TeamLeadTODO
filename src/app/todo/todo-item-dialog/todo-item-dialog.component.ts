import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-todo-item-dialog',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './todo-item-dialog.component.html',
  styleUrls: ['./todo-item-dialog.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TodoItemDialogComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
