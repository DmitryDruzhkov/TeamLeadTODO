import { enableProdMode, importProvidersFrom } from '@angular/core';
import { bootstrapApplication } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { AppComponent } from './app/app.component';

import { environment } from './environments/environment';

if (environment.production) {
  enableProdMode();
}

bootstrapApplication(AppComponent, {
  providers: [
    importProvidersFrom(
      RouterModule.forRoot([
        {
          path: '',
          loadComponent: () => import('./app/main-page/main-page.component').then((m) => m.MainPageComponent)
        },
        {
          path: 'item/:id',
          loadComponent: () => import('./app/todo-item-page/todo-item-page.component').then((m) => m.TodoItemPageComponent)
        },
        {
          path: 'history',
          loadComponent: () => import('./app/history-page/history-page.component').then((m) => m.HistoryPageComponent)
        },
        {
          path: 'backlog',
          loadComponent: () => import('./app/backlog-page/backlog-page.component').then((m) => m.BacklogPageComponent)
        }
      ]),
    ),
  ]
});
