import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { DndModule } from '@ng-dnd/core';
import { DndMultiBackendModule } from '@ng-dnd/multi-backend';

import { ContainerComponent } from './container.component';
import { TargetBoxComponent } from './target.component';
import { BlueOrYellowComponent } from './blue-or-yellow.component';

@NgModule({
  imports: [
    CommonModule,
    DndModule,
    DndMultiBackendModule,
    RouterModule.forChild([{ path: '', component: ContainerComponent }]),
    ContainerComponent,
    TargetBoxComponent,
    BlueOrYellowComponent,
  ],
})
export class NestedSourcesModule {}
