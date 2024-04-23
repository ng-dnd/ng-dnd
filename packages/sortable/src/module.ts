import { NgModule } from '@angular/core';
import { DndSortable } from './directives/sortable';
import { DndSortableExternal } from './directives/sortable-external';
import { DndSortableList } from './directives/sortable-list';
import { DndSortableRenderer } from './directives/sortable-render';
import { DndSortableTemplate } from './directives/sortable-template';

/** @ignore */
const EXPORTS = [
  DndSortable,
  DndSortableList,
  DndSortableTemplate,
  DndSortableRenderer,
  DndSortableExternal,
];

@NgModule({
  imports: EXPORTS,
  exports: EXPORTS,
})
export class DndSortableModule {}
