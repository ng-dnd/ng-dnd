import { Component, Output, EventEmitter, OnDestroy } from '@angular/core';
import { DndService } from "@ng-dnd/core";
import { ItemTypes } from './itemTypes';

@Component({
  selector: 'drilldown-source',
  template: `
    <div [dragSource]="source" [style.opacity]="opacity|async">
      <p>Drag this!</p>
    </div>
  `,
  styles: [`
    div {
      border: 1px dashed #777;
      background: #fff;
      padding: 0.5rem 1rem;
      margin-bottom: .5rem;
      background-color: white;
      width: 8rem;;
    }
    div, p { display: inline-block; padding: 3px; margin: 0; }
  `]
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
    }
  });

  opacity = this.source.listen(m => m.isDragging() ? 0.4 : 1);

  constructor(private dnd: DndService) { }

  ngOnDestroy() {
    this.source.unsubscribe();
  }
}
