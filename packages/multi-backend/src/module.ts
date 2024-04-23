import { NgModule } from '@angular/core';
import { DndPreview } from './preview';
import { DndPreviewRenderer } from './preview-renderer';

/** @ignore */
const EXPORTS = [DndPreview, DndPreviewRenderer];

@NgModule({
  imports: EXPORTS,
  exports: EXPORTS,
})
export class DndMultiBackendModule {}
