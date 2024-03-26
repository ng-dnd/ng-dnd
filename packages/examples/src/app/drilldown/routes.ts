import { Routes } from '@angular/router';
import { ContainerComponent } from './container.component';
import { TreeService } from './tree.service';

export const routes: Routes = [
  { path: '', component: ContainerComponent, providers: [TreeService] },
];
