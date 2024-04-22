import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { DndModule } from '@ng-dnd/core';
import { DndSortableExternal } from './directives/external.directive';
import { DndSortableList } from './directives/list.component';
import { DndSortableRenderer } from './directives/render.directive';
import { DndSortable } from './directives/sortable.directive';
import { DndSortableTemplate } from './directives/template.directive';

/** @ignore */
const EXPORTS = [
  DndSortable,
  DndSortableList,
  DndSortableTemplate,
  DndSortableRenderer,
  DndSortableExternal,
];

@NgModule({
  imports: [CommonModule, DndModule, EXPORTS],
  exports: EXPORTS,
})
export class DndSortableModule {}
