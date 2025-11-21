import { AsyncPipe } from '@angular/common';
import { Component, EventEmitter, OnDestroy, Output } from '@angular/core';
import { DndModule, DndService } from '@ng-dnd/core';
import { ItemTypes } from './itemTypes';

@Component({
  selector: 'drilldown-source',
  template: `
    <div [dragSource]="source" [style.opacity]="opacity | async">
      <span>Drag this!</span>
    </div>
  `,
  styles: `
    div {
      width: 8rem;
      padding: 6px;
      background-color: white;
      border: 1px dashed #777;
    }
  `,
  imports: [DndModule, AsyncPipe],
})
export class BoxComponent implements OnDestroy {
  @Output() beginDrag = new EventEmitter<void>();
  @Output() endDrag = new EventEmitter<void>();

  source = this.dnd.dragSource(ItemTypes.EMAIL, {
    beginDrag: () => {
      this.beginDrag.emit();
      return {};
    },
    endDrag: () => {
      this.endDrag.emit();
    },
  });

  opacity = this.source.listen(m => (m.isDragging() ? 0.4 : 1));

  constructor(private dnd: DndService) {}

  ngOnDestroy() {
    this.source.unsubscribe();
  }
}
