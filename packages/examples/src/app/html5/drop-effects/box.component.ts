import { Component, EventEmitter, Input, Output } from '@angular/core';
import { DndModule, DndService } from '@ng-dnd/core';
import { ItemTypes } from './item-types';

interface DropResult {
  dropEffect?: 'copy' | 'move' | 'link' | 'none';
}

@Component({
  selector: 'de-box',
  template: `
    <p [dragSource]="source" [dragSourceOptions]="force && { dropEffect: force }">
      Drag me ( <code>{{ force ? force : 'default behaviour' }}</code> )
    </p>
  `,
  styles: `
    p {
      display: inline-block;
      padding: 0.5em;
      border: 1px dashed #333;
      margin: 0 8px 8px 0;
      background: #fff;
    }
  `,
  standalone: true,
  imports: [DndModule],
})
export class BoxComponent {
  @Output() dropped = new EventEmitter<string>();
  @Input() force?: any;

  source = this.dnd.dragSource<unknown, DropResult>(ItemTypes.COPYABLE_ITEM, {
    beginDrag: monitor => ({}),
    endDrag: monitor => {
      const result = monitor.getDropResult();
      if (result) {
        this.dropped.emit(result.dropEffect);
      }
    },
  });

  constructor(private dnd: DndService) {}
}
