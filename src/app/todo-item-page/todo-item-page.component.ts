import { Component, inject, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-todo-item-page',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './todo-item-page.component.html',
  styleUrls: ['./todo-item-page.component.scss']
})
export class TodoItemPageComponent implements OnInit {

  private route = inject(ActivatedRoute);

  constructor() { 
    console.log(this.route.snapshot.paramMap.get('bank'));
  }

  ngOnInit(): void {
  }

}
