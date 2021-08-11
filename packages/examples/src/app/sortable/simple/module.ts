import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { RouterModule } from "@angular/router";
import { UtilityModule } from "@app/utility.module";
import { NgDndModule } from "@ng-dnd/core";
import { NgDndMultiBackendModule } from "@ng-dnd/multi-backend";
import { NgDndSortableModule } from "@ng-dnd/sortable";

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
    NgDndModule,
    NgDndMultiBackendModule,
    NgDndSortableModule,
    RouterModule.forChild([
      { path: "", component: ContainerComponent }
    ])
  ]
})
export class SimpleModule { }
