import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { DndModule } from '@ng-dnd/core';
import { DndMultiBackendModule } from '@ng-dnd/multi-backend';
import { DndSortableModule } from '@ng-dnd/sortable';

import { FixedHeightComponent } from './fixed-height.component';
import { ContainerComponent } from './container.component';

@NgModule({
  imports: [
    CommonModule,
    DndModule,
    DndMultiBackendModule,
    DndSortableModule,
    RouterModule.forChild([{ path: '', component: ContainerComponent }]),
    ContainerComponent,
    FixedHeightComponent,
  ],
})
export class FixedHeightModule {}
