import { Routes } from '@angular/router';
import { ContainerComponent } from './container.component';
import { GameService } from './game.service';

export const routes: Routes = [
  { path: '', component: ContainerComponent, providers: [GameService] },
];
