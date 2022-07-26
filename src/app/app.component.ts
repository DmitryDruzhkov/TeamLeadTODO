import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { RouterModule } from '@angular/router';
import { MainPageComponent } from './main-page/main-page.component';
import { MatTabsModule } from '@angular/material/tabs';
import { TodoItemsService } from './todo/services/todo-items.service';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { DialogComponent } from './core/components/dialog/dialog.component';
import { MatDialogModule } from '@angular/material/dialog';
import { DialogResult } from './core/components/dialog/constants';

@Component({
  selector: 'app-root',
  imports: [
    CommonModule,
    MainPageComponent,
    RouterModule,
    MatTabsModule,
    MatDialogModule,
  ],
  standalone: true,
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AppComponent {
  public dialog: MatDialog = inject(MatDialog);
  private todoItemsService = inject(TodoItemsService);

  /* public onOpenDialog(): void {
    const dialogRef: MatDialogRef<DialogComponent, any> = this.dialog.open(DialogComponent, {
      width: '250px',
    });

    dialogRef.afterClosed().subscribe((result: DialogResult) => {
      if (result === DialogResult.Yes) {
        this.createNewDay();
      }
    });
  } */

  /* private createNewDay(): void {
    this.todoItemsService.createNewDay();
  } */
}
