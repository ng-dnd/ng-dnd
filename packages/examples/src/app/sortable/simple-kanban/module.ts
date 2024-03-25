import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { DndModule } from '@ng-dnd/core';
import { DndMultiBackendModule } from '@ng-dnd/multi-backend';
import { DndSortableModule } from '@ng-dnd/sortable';

import { ContainerComponent } from './container.component';
import { KanbanBoardComponent } from './kanban-board/kanban-board.component';
import { KanbanListComponent } from './kanban-list/kanban-list.component';
import { KanbanCardComponent } from './kanban-card/kanban-card.component';
import { SortableSpecService } from './specs';

@NgModule({
  imports: [
    CommonModule,
    DndModule,
    DndMultiBackendModule,
    DndSortableModule,
    ReactiveFormsModule,
    RouterModule.forChild([{ path: '', component: ContainerComponent }]),
    ContainerComponent,
    KanbanBoardComponent,
    KanbanListComponent,
    KanbanCardComponent,
  ],
  providers: [SortableSpecService],
})
export class KanbanModule {}
