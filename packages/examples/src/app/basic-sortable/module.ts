import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { NgDndModule } from "@ng-dnd/core";
import { NgDndMultiBackendModule } from '@ng-dnd/multi-backend';
import { UtilityModule } from '../utility.module';

import { BasicSortableComponent } from './basic-sortable.component';
import { ContainerComponent } from './container.component';
import { CardComponent, CardInnerDirective } from './card.component';

@NgModule({
  declarations: [
    ContainerComponent,
    CardComponent,
    CardInnerDirective,
    BasicSortableComponent
  ],
  imports: [
    CommonModule,
    NgDndModule,
    NgDndMultiBackendModule,
    RouterModule.forChild([{ path: '', component: ContainerComponent }]),
    UtilityModule
  ],
})
export class BasicSortableModule { }
