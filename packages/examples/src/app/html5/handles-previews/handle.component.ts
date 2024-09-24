import { AsyncPipe } from '@angular/common';
import { Component, OnDestroy } from '@angular/core';
import { DndModule, DndService } from '@ng-dnd/core';
import { ItemTypes } from './item-types';

@Component({
  selector: 'handle',
  template: `
    <div [dragPreview]="source" [style.opacity]="opacity | async">
      <span class="handle" [dragSource]="source"></span>
      Drag this by the handle
    </div>
  `,
  styles: `
    div {
      display: inline-block;
      width: 8rem;
      padding: 6px;
      background-color: white;
      border: 1px dashed #777;
    }
    .handle {
      display: inline-block;
      width: 14px;
      height: 14px;
      background: darkgreen;
      cursor: move;
    }
  `,
  standalone: true,
  imports: [DndModule, AsyncPipe],
})
export class HandleComponent implements OnDestroy {
  source = this.dnd.dragSource(ItemTypes.BOX, {
    beginDrag: () => ({}),
  });

  opacity = this.source.listen(m => (m.isDragging() ? 0.4 : 1));

  constructor(private dnd: DndService) {}

  ngOnDestroy() {
    this.source.unsubscribe();
  }
}
