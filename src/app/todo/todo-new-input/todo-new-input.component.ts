import { ChangeDetectionStrategy, ChangeDetectorRef, Component, ElementRef, EventEmitter, inject, Input, Output, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatInputModule } from '@angular/material/input';
import { FormControl, FormsModule, ReactiveFormsModule } from '@angular/forms';
import {A11yModule} from '@angular/cdk/a11y'; 

@Component({
  selector: 'app-todo-new-input',
  standalone: true,
  imports: [
    CommonModule,
    MatInputModule,
    FormsModule,
    ReactiveFormsModule,
    A11yModule
  ],
  templateUrl: './todo-new-input.component.html',
  styleUrls: ['./todo-new-input.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TodoNewInputComponent {
  @Input() isInitFocus: boolean = false;
  @Output() createItem: EventEmitter<string> = new EventEmitter();

  @ViewChild('todoInput') todoInput: ElementRef;

  private cdk = inject(ChangeDetectorRef);

  public descriptionFormControl = new FormControl('');

  public ngAfterViewInit(): void {
    if (this.isInitFocus) {
      this.todoInput.nativeElement.focus();
      this.cdk.detectChanges();  
    }
  }

  public onCreateItem(): void {
    const description: string | null = this.descriptionFormControl.value;
    if (description) {
      this.createItem.emit(description);
      this.descriptionFormControl.patchValue('');
    }
  }
}
