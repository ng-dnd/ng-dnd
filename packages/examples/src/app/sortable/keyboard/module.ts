import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { RouterModule } from "@angular/router";
import { NgDndModule } from "@ng-dnd/core";
import { NgDndMultiBackendModule } from "@ng-dnd/multi-backend";
import { NgDndSortableModule } from "@ng-dnd/sortable";
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
    NgDndModule,
    NgDndMultiBackendModule,
    NgDndSortableModule,
    StoreModule.forFeature('simple-ngrx', reducer),
    RouterModule.forChild([
      { path: "", component: ContainerComponent }
    ]),
    HotkeyModule,
  ]
})
export class KeyboardModule { }
