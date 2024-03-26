import { Routes } from '@angular/router';
import { ContainerComponent } from './container.component';
import { SortableSpecService } from './specs';

export const routes: Routes = [
  { path: '', component: ContainerComponent, providers: [SortableSpecService] },
];
