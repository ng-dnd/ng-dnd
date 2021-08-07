import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { UtilityModule } from "app/utility.module";
import { SkyhookDndModule } from "@ng-dnd/core";
import { RouterModule } from "@angular/router";
import { SkyhookMultiBackendModule } from "@ng-dnd/multi-backend";
import { SkyhookSortableModule } from "@ng-dnd/sortable";

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
        SkyhookDndModule,
        SkyhookMultiBackendModule,
        SkyhookSortableModule,
        RouterModule.forChild([
            { path: "", component: ContainerComponent }
        ])
    ]
})
export class SimpleModule { }
