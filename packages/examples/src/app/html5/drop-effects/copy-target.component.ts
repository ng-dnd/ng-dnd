import { AsyncPipe } from '@angular/common';
import { Component } from '@angular/core';
import { DndModule, DndService } from '@ng-dnd/core';
import { ItemTypes } from './item-types';

@Component({
  selector: 'de-copy-target',
  template: `
    <div [dropTarget]="target" class="target" [class.over]="over$ | async">
      <p>
        Drag one of the above boxes. Hold 'alt' when dragging the default one to make it a copy.
      </p>
      @if ((canDrop$ | async) !== true) {
        <ng-content />
      } @else {
        <p>Drop here</p>
      }
    </div>
  `,
  styles: `
    .target {
      max-width: 300px;
      height: 200px;
      background: #ddd;
      padding: 1em;
    }
    .over {
      background: #bbb;
    }
  `,
  imports: [DndModule, AsyncPipe],
})
export class CopyTargetComponent {
  target = this.dnd.dropTarget(ItemTypes.COPYABLE_ITEM, {});

  canDrop$ = this.target.listen(m => m.canDrop());
  over$ = this.target.listen(m => m.isOver() && m.canDrop());

  constructor(private dnd: DndService) {}
}
