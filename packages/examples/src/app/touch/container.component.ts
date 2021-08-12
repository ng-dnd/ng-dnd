import { Component } from '@angular/core';
import { ItemTypes } from './itemTypes';
import { DndService } from "@ng-dnd/core";

@Component({
  selector: 'touch-container',
  template: `
    <div>
    <app-example-link path="touch"></app-example-link>
    <p>
        This demo won't be very impressive, but read the code to find out how to use
        a &lt;dnd-preview&gt; to easily render touch previews.
    </p>

        <dnd-preview>
            <ng-template let-type let-item="item">
                <ng-container [ngSwitch]="type">
                    <touch-item *ngSwitchCase="ItemTypes.ITEM" [color]="item.color">
                    </touch-item>
                </ng-container>
            </ng-template>
        </dnd-preview>

        <touch-draggable-item [color]="'aliceblue'"></touch-draggable-item>
        <touch-draggable-item [color]="'lightgoldenrodyellow'"></touch-draggable-item>
        <touch-draggable-item></touch-draggable-item>
    </div>`
})
export class ContainerComponent {
  ItemTypes = ItemTypes;
}
