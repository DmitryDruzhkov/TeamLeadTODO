import { ChangeDetectionStrategy, Component, EventEmitter, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatInputModule } from '@angular/material/input';
import { FormControl, FormsModule, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-todo-new-input',
  standalone: true,
  imports: [
    CommonModule,
    MatInputModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  templateUrl: './todo-new-input.component.html',
  styleUrls: ['./todo-new-input.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TodoNewInputComponent {
  @Output() createItem: EventEmitter<string> = new EventEmitter();

  public descriptionFormControl = new FormControl('');

  public onCreateItem(): void {
    const description: string | null = this.descriptionFormControl.value;
    if (description) {
      this.createItem.emit(description);
      this.descriptionFormControl.patchValue('');
    }
  }
}
