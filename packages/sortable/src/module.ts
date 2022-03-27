import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DndModule } from '@ng-dnd/core';
import { DndSortable } from './directives/sortable.directive';
import { DndSortableList } from './directives/list.component';
import { DndSortableTemplate } from './directives/template.directive';
import { DndSortableRenderer } from './directives/render.directive';
import { DndSortableExternal } from './directives/external.directive';

/** @ignore */
const EXPORTS = [
  DndSortable,
  DndSortableList,
  DndSortableTemplate,
  DndSortableRenderer,
  DndSortableExternal,
];

@NgModule({
  imports: [CommonModule, DndModule],
  declarations: EXPORTS,
  exports: EXPORTS,
})
export class DndSortableModule { }
