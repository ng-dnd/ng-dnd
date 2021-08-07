import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { ReactiveFormsModule } from '@angular/forms';
import { UtilityModule } from "app/utility.module";
import { SkyhookDndModule } from "@ng-dnd/core";
import { RouterModule } from "@angular/router";
import { SkyhookMultiBackendModule } from "@ng-dnd/multi-backend";
import { SkyhookSortableModule } from "@ng-dnd/sortable";

import { ListComponent } from "./list.component";
import { MathFormComponent } from "./math-form.component";
import { PrintoutComponent } from './printout.component';
import { ContainerComponent } from "./container.component";
import { SectionComponent } from "./section.component";

@NgModule({
    declarations: [
        ContainerComponent,
        ListComponent,
        MathFormComponent,
        PrintoutComponent,
        SectionComponent,
    ],
    imports: [
        CommonModule,
        ReactiveFormsModule,
        UtilityModule,
        SkyhookDndModule,
        SkyhookMultiBackendModule,
        SkyhookSortableModule,
        RouterModule.forChild([
            { path: "", component: ContainerComponent }
        ])
    ]
})
export class QuizModule { }
