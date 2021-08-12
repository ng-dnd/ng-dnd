import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { DndPreviewComponent } from "./preview.component";
import { DndPreviewRendererComponent } from "./preview-renderer.component";

/** @ignore */
const EXPORTS = [
    DndPreviewComponent,
    DndPreviewRendererComponent,
];

@NgModule({
    imports: [CommonModule],
    declarations: EXPORTS,
    exports: EXPORTS,
})
export class DndMultiBackendModule {}
