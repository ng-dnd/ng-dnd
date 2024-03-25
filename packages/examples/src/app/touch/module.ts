import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { DndModule } from '@ng-dnd/core';
import { DndMultiBackendModule } from '@ng-dnd/multi-backend';

import { ContainerComponent } from './container.component';
import { ItemComponent, DraggableItemComponent } from './item.component';

@NgModule({
  imports: [
    CommonModule,
    DndModule,
    DndMultiBackendModule,
    RouterModule.forChild([{ path: '', component: ContainerComponent }]),
    ContainerComponent,
    ItemComponent,
    DraggableItemComponent,
  ],
})
export class TouchModule {}
