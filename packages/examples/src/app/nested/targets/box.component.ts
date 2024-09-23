import { AsyncPipe } from '@angular/common';
import { Component, OnDestroy } from '@angular/core';
import { DndModule, DndService } from '@ng-dnd/core';
import { ItemTypes } from './item-types';

@Component({
  selector: 'app-nested-targets-box',
  template: `
    <div [dragSource]="source" [style.opacity]="opacity | async">
      <p>Drag this!</p>
    </div>
  `,
  styles: `
    div {
      border: 1px dashed #777;
      background: #fff;
      padding: 0.5rem 1rem;
      width: 8rem;
      margin-bottom: 1rem;
    }
    p {
      display: inline-block;
      padding: 3px;
      margin: 0;
    }
  `,
  standalone: true,
  imports: [DndModule, AsyncPipe],
})
export class BoxComponent implements OnDestroy {
  source = this.dnd.dragSource(ItemTypes.BOX, {
    beginDrag: () => ({}),
  });

  opacity = this.source.listen(m => (m.isDragging() ? 0.4 : 1));

  constructor(private dnd: DndService) {}

  ngOnDestroy() {
    this.source.unsubscribe();
  }
}
