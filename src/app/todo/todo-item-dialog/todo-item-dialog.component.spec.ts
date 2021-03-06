import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TodoItemDialogComponent } from './todo-item-dialog.component';

describe('TodoItemDialogComponent', () => {
  let component: TodoItemDialogComponent;
  let fixture: ComponentFixture<TodoItemDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ TodoItemDialogComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TodoItemDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
