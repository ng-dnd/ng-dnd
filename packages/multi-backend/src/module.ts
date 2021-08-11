import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { NgDndPreviewComponent } from "./preview.component";
import { NgDndPreviewRendererComponent } from "./preview-renderer.component";

/** @ignore */
const EXPORTS = [
    NgDndPreviewComponent,
    NgDndPreviewRendererComponent,
];

@NgModule({
    imports: [CommonModule],
    declarations: EXPORTS,
    exports: EXPORTS,
})
export class NgDndMultiBackendModule {}
