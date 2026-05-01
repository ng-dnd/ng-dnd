import { importProvidersFrom } from '@angular/core';
import { Routes } from '@angular/router';
import { Container } from './container';

import { StoreModule } from '@ngrx/store';
import { SortableSpecService } from './specs';
import { reducer } from './store';

export const routes: Routes = [
  {
    path: '',
    component: Container,
    providers: [
      importProvidersFrom([StoreModule.forFeature('kanban', reducer)]),
      SortableSpecService,
    ],
  },
];
