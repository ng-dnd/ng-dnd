import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { NgDndModule } from "@ng-dnd/core";

import { Container } from './container.component';
import { TargetComponent } from './target.component';
import { BoxComponent } from './box.component';
import { TreeService } from './tree.service';
import { FolderComponent } from './folder.component';
import { UtilityModule } from '../utility.module';

@NgModule({
  declarations: [
    Container,
    TargetComponent,
    BoxComponent,
    FolderComponent
  ],
  imports: [
    CommonModule,
    NgDndModule,
    RouterModule.forChild([{ path: '', component: Container }]),
    UtilityModule
  ],
  providers: [
    TreeService
  ]
})
export class DrilldownModule { }

