import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { DndPreviewRendererComponent } from './preview-renderer.component';
import { DndPreviewComponent } from './preview.component';

/** @ignore */
const EXPORTS = [DndPreviewComponent, DndPreviewRendererComponent];

@NgModule({
  imports: [CommonModule, EXPORTS],
  exports: EXPORTS,
})
export class DndMultiBackendModule {}
