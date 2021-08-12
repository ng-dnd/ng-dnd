import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { RouterModule } from "@angular/router";
import { UtilityModule } from "@app/utility.module";
import { DndModule } from "@ng-dnd/core";
import { DndMultiBackendModule } from "@ng-dnd/multi-backend";
import { DndSortableModule } from "@ng-dnd/sortable";

import { SimpleComponent } from "./simple.component";
import { ContainerComponent } from "./container.component";

@NgModule({
  declarations: [
    ContainerComponent,
    SimpleComponent,
  ],
  imports: [
    CommonModule,
    UtilityModule,
    DndModule,
    DndMultiBackendModule,
    DndSortableModule,
    RouterModule.forChild([
      { path: "", component: ContainerComponent }
    ])
  ]
})
export class SimpleModule { }
