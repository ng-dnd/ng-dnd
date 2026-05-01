import { Routes } from '@angular/router';
import { Container } from './container';
import { GameService } from './game.service';

export const routes: Routes = [
  { path: '', component: Container, providers: [GameService] },
];
