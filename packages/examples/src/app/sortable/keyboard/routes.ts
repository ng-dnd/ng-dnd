import { importProvidersFrom } from '@angular/core';
import { Routes } from '@angular/router';
import { ContainerComponent } from './container.component';

import { StoreModule } from '@ngrx/store';
import { reducer } from './store/reducer';

export const routes: Routes = [
  {
    path: '',
    component: ContainerComponent,
    providers: [importProvidersFrom([StoreModule.forFeature('simple-ngrx', reducer)])],
  },
];
