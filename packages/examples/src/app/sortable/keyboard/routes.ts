import { importProvidersFrom } from '@angular/core';
import { Routes } from '@angular/router';
import { Container } from './container';

import { StoreModule } from '@ngrx/store';
import { reducer } from './store/reducer';

export const routes: Routes = [
  {
    path: '',
    component: Container,
    providers: [importProvidersFrom([StoreModule.forFeature('simple-ngrx', reducer)])],
  },
];
