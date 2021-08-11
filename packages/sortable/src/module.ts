import { NgModule } from "@angular/core";
import { NgDndSortable } from "./directives/sortable.directive";
import { NgDndSortableList } from "./directives/list.component";
import { NgDndSortableTemplate } from "./directives/template.directive";
import { NgDndSortableRenderer } from "./directives/render.directive";
import { NgDndSortableExternal } from "./directives/external.directive";
import { CommonModule } from "@angular/common";
import { NgDndModule } from "@ng-dnd/core";

/** @ignore */
const EXPORTS = [
    NgDndSortable,
    NgDndSortableList,
    NgDndSortableTemplate,
    NgDndSortableRenderer,
    NgDndSortableExternal,
];

@NgModule({
    declarations: EXPORTS,
    exports: EXPORTS,
    imports: [CommonModule, NgDndModule]
})
export class NgDndSortableModule {}
