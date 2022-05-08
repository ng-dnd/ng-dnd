import { ChangeDetectionStrategy, Component, Input, OnDestroy, OnInit } from '@angular/core';
import { DndService } from '@ng-dnd/core';
import { getEmptyImage } from 'react-dnd-html5-backend';
import { BoxWithLocation } from '../BoxWithLocation';

@Component({
  selector: 'app-draggable-box',
  template: `
    <div class="draggable-box" [dragSource]="source" [ngStyle]="getStyles(!!(isDragging$ | async))">
      <app-box [title]="title"></app-box>
    </div>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DraggableBoxComponent implements OnInit, OnDestroy {
  @Input() id!: number;
  @Input() title!: string;
  @Input() left!: number;
  @Input() top!: number;

  source = this.dnd.dragSource<BoxWithLocation>('BOX', {
    beginDrag: () => {
      const { id, title, left, top } = this;
      return { id, title, left, top };
    },
  });

  isDragging$ = this.source.listen(m => m.isDragging());

  constructor(private dnd: DndService) {}

  ngOnInit() {
    this.source.connectDragPreview(getEmptyImage(), {
      // for ie11 compat with DragLayer
      captureDraggingState: true,
    });
  }

  ngOnDestroy() {
    this.source.unsubscribe();
  }

  getStyles(isDragging: boolean) {
    const { left, top } = this;
    const transform = `translate3d(${left}px, ${top}px, 0)`;

    return {
      position: 'absolute',
      transform,
      WebkitTransform: transform,
      // hide the original element while dragging
      opacity: isDragging ? 0 : null,
      height: isDragging ? 0 : null,
    };
  }
}
