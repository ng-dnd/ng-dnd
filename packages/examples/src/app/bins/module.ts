import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { RouterModule } from "@angular/router";
import { SkyhookDndModule } from "@ng-dnd/core";
import { SkyhookMultiBackendModule } from "@ng-dnd/multi-backend";
import { UtilityModule } from "../utility.module";

import { Bin } from "./bin.component";
import { TrashPile } from "./trash-pile.component";
import { Trash } from "./trash.component";
import { ContainerComponent } from "./container.component";

@NgModule({
  declarations: [Bin, TrashPile, Trash, ContainerComponent],
  imports: [
    CommonModule,
    SkyhookDndModule,
    SkyhookMultiBackendModule,
    RouterModule.forChild([{ path: "", component: ContainerComponent }]),
    UtilityModule
  ]
})
export class BinsModule { }
