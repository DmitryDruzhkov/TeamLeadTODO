import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TodoItemPageComponent } from './todo-item-page.component';

describe('TodoItemPageComponent', () => {
  let component: TodoItemPageComponent;
  let fixture: ComponentFixture<TodoItemPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ TodoItemPageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TodoItemPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
