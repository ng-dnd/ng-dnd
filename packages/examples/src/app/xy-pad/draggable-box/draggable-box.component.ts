import { AsyncPipe } from '@angular/common';
import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  Input,
  OnDestroy,
  OnInit,
  Output,
} from '@angular/core';
import { DndModule, DndService } from '@ng-dnd/core';
import { getEmptyImage } from 'react-dnd-html5-backend';
import { CrosshairsComponent } from '../crosshairs.component';
import { Spot } from '../spot';
import { SpotComponent } from '../spot.component';

@Component({
  selector: 'xy-draggable-box',
  template: `
    <div class="root" [dragSource]="source" [style]="getRootStyles(isDragging$ | async)">
      <div class="draggable-node">
        <xy-box />
      </div>
      <div class="fullsize"></div>
    </div>
    @if ((isDragging$ | async) !== true) {
      <xy-crosshairs [x]="spot.x" [y]="spot.y" />
    }
  `,
  styles: `
    .root {
      cursor: move;
    }
    xy-crosshairs,
    .draggable-node {
      pointer-events: none;
      position: absolute;
    }
    xy-crosshairs {
      margin-top: 16px;
    }
    .fullsize {
      position: absolute;
      left: -400px;
      top: -400px;
      width: 800px;
      height: 800px;
    }
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: true,
  imports: [DndModule, SpotComponent, CrosshairsComponent, AsyncPipe],
})
export class DraggableBoxComponent implements OnInit, OnDestroy {
  @Input() spot!: Spot;
  @Output() endDrag = new EventEmitter<Spot>();

  source = this.dnd.dragSource<Spot>('SPOT', {
    beginDrag: () => {
      return this.spot;
    },
    isDragging: () => {
      return true;
    },
    endDrag: () => {
      this.endDrag.emit(this.spot);
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

  getStyles() {
    return;
  }

  getRootStyles(isDragging: boolean | null) {
    const { x, y } = this.spot;
    const transform = `translate3d(${x}px, ${y}px, 0)`;

    return {
      position: 'relative',
      marginLeft: `${-16}px`,
      marginTop: `${-16}px`,
      transform,
      WebkitTransform: transform,
      // hide the original element while dragging
      opacity: isDragging ? 0 : null,
      height: isDragging ? 0 : null,
    };
  }
}
