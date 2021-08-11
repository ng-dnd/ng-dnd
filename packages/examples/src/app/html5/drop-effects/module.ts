import { NgModule } from '@angular/core';
import { CommonModule } from "@angular/common";
import { RouterModule } from "@angular/router";
import { UtilityModule } from "@app/utility.module";
import { NgDndModule } from "@ng-dnd/core";
import { NgDndMultiBackendModule } from "@ng-dnd/multi-backend";

import { ContainerComponent } from "./container.component";
import { CopyTargetComponent } from "./copy-target.component";
import { BoxComponent } from "./box.component";

@NgModule({
  declarations: [
    ContainerComponent,
    CopyTargetComponent,
    BoxComponent
  ],
  imports: [
    CommonModule,
    UtilityModule,
    NgDndModule,
    NgDndMultiBackendModule,
    RouterModule.forChild([{ path: "", component: ContainerComponent }]),
  ],
})
export class DropEffectsModule {
}
