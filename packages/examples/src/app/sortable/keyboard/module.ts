import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { RouterModule } from "@angular/router";
import { SkyhookDndModule } from "@ng-dnd/core";
import { SkyhookMultiBackendModule } from "@ng-dnd/multi-backend";
import { SkyhookSortableModule } from "@ng-dnd/sortable";
import { StoreModule } from "@ngrx/store";
import { HotkeyModule } from 'angular2-hotkeys';
import { UtilityModule } from "@app/utility.module";

import { SimpleComponent } from "./simple.component";
import { SummaryComponent } from "./summary.component";
import { ContainerComponent } from "./container.component";
import { reducer } from './store/reducer';

@NgModule({
  declarations: [
    ContainerComponent,
    SimpleComponent,
    SummaryComponent,
  ],
  imports: [
    CommonModule,
    UtilityModule,
    SkyhookDndModule,
    SkyhookMultiBackendModule,
    SkyhookSortableModule,
    StoreModule.forFeature('simple-ngrx', reducer),
    RouterModule.forChild([
      { path: "", component: ContainerComponent }
    ]),
    HotkeyModule,
  ]
})
export class KeyboardModule { }
