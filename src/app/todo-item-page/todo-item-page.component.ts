import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { TodoItemDetailComponent } from '../todo-item-detail/todo-item-detail.component';

@Component({
  selector: 'app-todo-item-page',
  standalone: true,
  imports: [
    CommonModule,
    TodoItemDetailComponent,
  ],
  templateUrl: './todo-item-page.component.html',
  styleUrls: ['./todo-item-page.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TodoItemPageComponent {
  public itemId: number = +(inject(ActivatedRoute).snapshot.paramMap.get('id') || 0);
}
