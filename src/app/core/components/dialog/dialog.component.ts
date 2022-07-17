import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatDialogRef } from '@angular/material/dialog';
import { DialogResult } from './constants';

@Component({
  selector: 'app-dialog',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class DialogComponent {
  public dialogRef: MatDialogRef<DialogComponent> = inject(MatDialogRef);

  public onYesClicked() {
    this.closeDialog(DialogResult.Yes);
  }

  public onNoClicked(): void {
    this.closeDialog(DialogResult.No);
  }

  private closeDialog(result: DialogResult): void {
    this.dialogRef.close(result);
  }

}
