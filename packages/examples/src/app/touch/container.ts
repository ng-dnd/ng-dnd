import { Component } from '@angular/core';
import { ExampleLink } from '@app/utility/example-link';
import { DndMultiBackendModule } from '@ng-dnd/multi-backend';
import { DraggableItem, Item } from './item';
import { ItemTypes } from './itemTypes';

@Component({
  selector: 'touch-container',
  template: `
    <div>
      <app-example-link path="touch" />
      <p>
        This demo won't be very impressive, but read the code to find out how to use a
        &lt;dnd-preview&gt; to easily render touch previews.
      </p>

      <dnd-preview>
        <ng-template let-type let-item="item">
          @switch (type) {
            @case (ItemTypes.ITEM) {
              <touch-item [color]="item.color" />
            }
          }
        </ng-template>
      </dnd-preview>

      <touch-draggable-item [color]="'aliceblue'" />
      <touch-draggable-item [color]="'lightgoldenrodyellow'" />
      <touch-draggable-item />
    </div>
  `,
  imports: [ExampleLink, DndMultiBackendModule, Item, DraggableItem],
})
export class Container {
  ItemTypes = ItemTypes;
}
