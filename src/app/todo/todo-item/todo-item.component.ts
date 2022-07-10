import { CommonModule } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';
import { TodoItem } from '../shared/interfaces';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatDividerModule } from '@angular/material/divider'; 
import { RouterModule } from '@angular/router';

@Component({
  standalone: true,
  imports: [CommonModule, MatCheckboxModule, MatDividerModule, RouterModule],
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.scss']
})
export class TodoItemComponent implements OnInit {
  @Input() item: TodoItem | undefined;

  constructor() { }

  ngOnInit(): void {
  }

  onSetComplite(): void {

  }

}
