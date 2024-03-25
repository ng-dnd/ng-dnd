import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { DndModule } from '@ng-dnd/core';
import { DndMultiBackendModule } from '@ng-dnd/multi-backend';

import { BasicSortableComponent } from './basic-sortable.component';
import { ContainerComponent } from './container.component';
import { CardComponent, CardInnerDirective } from './card.component';

@NgModule({
  imports: [
    CommonModule,
    DndModule,
    DndMultiBackendModule,
    RouterModule.forChild([{ path: '', component: ContainerComponent }]),
    ContainerComponent,
    CardComponent,
    CardInnerDirective,
    BasicSortableComponent,
  ],
})
export class BasicSortableModule {}
