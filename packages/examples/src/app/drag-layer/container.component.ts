import { Component } from '@angular/core';
import { ExampleLinkComponent } from '@app/utility/example-link.component';
import { CustomDragLayerComponent } from './custom-drag-layer/custom-drag-layer.component';
import { DragContainerComponent } from './drag-container/drag-container.component';

@Component({
  selector: 'app-drag-layer-container',
  template: `
    <app-example-link path="drag-layer" />
    <app-custom-drag-layer />
    <app-drag-container />
  `,
  standalone: true,
  imports: [ExampleLinkComponent, CustomDragLayerComponent, DragContainerComponent],
})
export class ContainerComponent {}
