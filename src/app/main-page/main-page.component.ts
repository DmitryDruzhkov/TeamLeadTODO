import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';
import { TodoListComponent } from '../todo/todo-list/todo-list.component';

@Component({
  standalone: true,
  imports: [
    CommonModule,
    TodoListComponent,
  ],
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.scss']
})
export class MainPageComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}