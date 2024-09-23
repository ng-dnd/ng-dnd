import { AsyncPipe } from '@angular/common';
import { Component, OnDestroy } from '@angular/core';
import { DndModule, DndService } from '@ng-dnd/core';
import { ItemTypes } from './item-types';

@Component({
  selector: 'handle',
  template: `
    <div [dragPreview]="source" [style.opacity]="opacity | async">
      <p>
        <span class="handle" [dragSource]="source"></span>
        Drag this by the handle
      </p>
    </div>
  `,
  styles: `
    div {
      border: 1px dashed #777;
      background: #fff;
      padding: 0.5rem 1rem;
      margin-bottom: 0.5rem;
      background-color: white;
      width: 8rem;
    }
    .handle {
      cursor: move;
      width: 14px;
      height: 14px;
      background: darkgreen;
      display: inline-block;
    }
    div,
    p {
      display: inline-block;
      padding: 3px;
      margin: 0;
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
