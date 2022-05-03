// TODO: move this to another package, in the `dnd-multi-backend` monorepo.

// <reference path="src/ambient.d.ts" />
export { TouchBackend } from 'react-dnd-touch-backend';
export { HTML5Backend } from 'react-dnd-html5-backend';
export {
  default as MultiBackend,
  createTransition,
  HTML5DragTransition,
  TouchTransition,
  MouseTransition
} from 'dnd-multi-backend';

export { HTML5ToTouch, createDefaultMultiBackend } from './src/HTML5ToTouch';
export { DndMultiBackendModule } from './src/module';
export { DndPreviewComponent } from './src/preview.component';
export { DndPreviewRendererComponent } from './src/preview-renderer.component';
