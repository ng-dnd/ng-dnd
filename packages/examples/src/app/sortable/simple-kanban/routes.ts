import { Routes } from '@angular/router';
import { Container } from './container';
import { SortableSpecService } from './specs';

export const routes: Routes = [
  { path: '', component: Container, providers: [SortableSpecService] },
];
