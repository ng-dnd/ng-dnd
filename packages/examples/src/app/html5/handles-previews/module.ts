import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { UtilityModule } from '@app/utility.module';
import { DndModule } from '@ng-dnd/core';
import { DndMultiBackendModule } from '@ng-dnd/multi-backend';

import { ContainerComponent } from './container.component';
import { CustomPreviewComponent } from './custom-preview.component';
import { HandleComponent } from './handle.component';

@NgModule({
  declarations: [
    CustomPreviewComponent,
    HandleComponent,
    ContainerComponent
  ],
  imports: [
    CommonModule,
    UtilityModule,
    DndModule,
    DndMultiBackendModule,
    RouterModule.forChild([{ path: '', component: ContainerComponent }]),
  ],
})
export class HandlesPreviewsModule {
}
