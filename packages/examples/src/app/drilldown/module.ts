import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { DndModule } from '@ng-dnd/core';

import { ContainerComponent } from './container.component';
import { TargetComponent } from './target.component';
import { BoxComponent } from './box.component';
import { TreeService } from './tree.service';
import { FolderComponent } from './folder.component';
import { UtilityModule } from '../utility.module';

@NgModule({
  declarations: [ContainerComponent, TargetComponent, BoxComponent, FolderComponent],
  imports: [
    CommonModule,
    DndModule,
    RouterModule.forChild([{ path: '', component: ContainerComponent }]),
    UtilityModule,
  ],
  providers: [TreeService],
})
export class DrilldownModule {}
