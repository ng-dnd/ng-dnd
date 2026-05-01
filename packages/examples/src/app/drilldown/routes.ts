import { Routes } from '@angular/router';
import { Container } from './container';
import { TreeService } from './tree.service';

export const routes: Routes = [
  { path: '', component: Container, providers: [TreeService] },
];
