import { Component } from '@angular/core';
import { ExampleLink } from '@app/utility/example-link';
import { CustomDragLayer } from './custom-drag-layer/custom-drag-layer';
import { DragContainer } from './drag-container/drag-container';

@Component({
  selector: 'app-drag-layer-container',
  template: `
    <app-example-link path="drag-layer" />
    <app-custom-drag-layer />
    <app-drag-container />
  `,
  imports: [ExampleLink, CustomDragLayer, DragContainer],
})
export class Container {}
