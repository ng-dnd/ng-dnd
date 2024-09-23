import { Component } from '@angular/core';
import { ExampleLinkComponent } from '@app/utility/example-link.component';
import { DndMultiBackendModule } from '@ng-dnd/multi-backend';
import { DraggableItemComponent, ItemComponent } from './item.component';
import { ItemTypes } from './itemTypes';

@Component({
  selector: 'touch-container',
  template: `
    <div>
      <app-example-link path="touch"></app-example-link>
      <p>
        This demo won't be very impressive, but read the code to find out how to use a
        &lt;dnd-preview&gt; to easily render touch previews.
      </p>

      <dnd-preview>
        <ng-template let-type let-item="item">
          @switch (type) {
            @case (ItemTypes.ITEM) {
              <touch-item [color]="item.color"></touch-item>
            }
          }
        </ng-template>
      </dnd-preview>

      <touch-draggable-item [color]="'aliceblue'"></touch-draggable-item>
      <touch-draggable-item [color]="'lightgoldenrodyellow'"></touch-draggable-item>
      <touch-draggable-item></touch-draggable-item>
    </div>
  `,
  standalone: true,
  imports: [ExampleLinkComponent, DndMultiBackendModule, ItemComponent, DraggableItemComponent],
})
export class ContainerComponent {
  ItemTypes = ItemTypes;
}
