import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { RouterModule } from '@angular/router';
import { MainPageComponent } from './main-page/main-page.component';
import { MatTabsModule } from '@angular/material/tabs';
import { TodoItemsService } from './todo/services/todo-items.service';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { DialogComponent } from './core/components/dialog/dialog.component';
import { filter } from 'rxjs';
import { MatDialogModule } from '@angular/material/dialog';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@Component({
  selector: 'app-root',
  imports: [
    CommonModule,
    MainPageComponent,
    RouterModule,
    MatTabsModule,
    MatDialogModule,
    /* BrowserAnimationsModule */
  ],
  standalone: true,
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AppComponent {
  public dialog: MatDialog = inject(MatDialog);
  private todoItemsService = inject(TodoItemsService);

  public onOpenDialog(): void {
    const dialogRef: MatDialogRef<DialogComponent, any> = this.dialog.open(DialogComponent, {
      width: '250px',
    });

    dialogRef.afterClosed().pipe(filter(Boolean)).subscribe((result: boolean) => {
      this.createNewDay();
    });
  }

  private createNewDay(): void {
    this.todoItemsService.createNewDay();
  }
}
