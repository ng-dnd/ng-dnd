import { AsyncPipe } from '@angular/common';
import { Component, OnDestroy, inject } from '@angular/core';
import { DndModule, DndService } from '@ng-dnd/core';
import { ItemTypes } from './item-types';

@Component({
  selector: 'app-nested-targets-box',
  template: `
    <div [dragSource]="source" [style.opacity]="opacity | async">
      <span>Drag this!</span>
    </div>
  `,
  styles: `
    div {
      width: 8rem;
      padding: 0.5rem 1rem;
      margin-bottom: 1rem;
      background: #fff;
      border: 1px dashed #777;
    }
  `,
  imports: [DndModule, AsyncPipe],
})
export class BoxComponent implements OnDestroy {
  private dnd = inject(DndService);

  source = this.dnd.dragSource(ItemTypes.BOX, {
    beginDrag: () => ({}),
  });

  opacity = this.source.listen(m => (m.isDragging() ? 0.4 : 1));

  ngOnDestroy() {
    this.source.unsubscribe();
  }
}
