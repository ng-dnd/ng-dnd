import { AsyncPipe } from '@angular/common';
import {
  AfterViewInit,
  ChangeDetectionStrategy,
  Component,
  ElementRef,
  EventEmitter,
  Input,
  OnDestroy,
  Output,
} from '@angular/core';
import { DndService, Offset } from '@ng-dnd/core';
import { filter, map } from 'rxjs/operators';
import { BoxDragPreviewComponent } from '../box-drag-preview/box-drag-preview.component';
import { CrosshairsComponent } from '../crosshairs.component';
import { Spot } from '../spot';
import { Rect, alongEdge, clone, fmap, minus, plus } from '../vectors';
import { snapToGrid } from './snapToGrid';

interface Collected {
  item: Spot;
  itemType: string | symbol;
  isDragging: boolean;
  initialOffset: Offset;
  currentOffset: Offset;
}

@Component({
  selector: 'xy-custom-drag-layer',
  template: `
    @if (collect$ | async; as c) {
      @if (c.isDragging) {
        @if (crossStyle$ | async; as cross) {
          <xy-crosshairs [x]="cross.x" [y]="cross.y" />
        }
        <div [style]="movingStyle$ | async">
          @switch (c.itemType) {
            @case ('SPOT') {
              <xy-box-drag-preview />
            }
          }
        </div>
      }
    }
  `,
  styleUrl: './custom-drag-layer.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: true,
  imports: [CrosshairsComponent, BoxDragPreviewComponent, AsyncPipe],
})
export class CustomDragLayerComponent implements AfterViewInit, OnDestroy {
  @Input() snapToGrid = false;

  snappingFunction = snapToGrid(32);
  @Input()
  set incrementPx(n: number) {
    this.snappingFunction = snapToGrid(n);
  }

  @Output() moved = new EventEmitter<Offset>();

  rect: Rect = { x: 0, y: 0, width: 0, height: 0 };

  dragLayer = this.dnd.dragLayer<Spot>();

  collect$ = this.dragLayer.listen(monitor => {
    this.setWindowRelativeOffset();
    return {
      item: monitor.getItem(),
      itemType: monitor.getItemType(),
      isDragging: monitor.isDragging(),
      initialOffset: this.absToRelative(monitor.getInitialSourceClientOffset()!),
      currentOffset: this.absToRelative(monitor.getSourceClientOffset()!),
    } as Collected;
  });

  movingStyle$ = this.collect$.pipe(
    map(c => this.getItemStyles(c)),
    filter(x => x != null)
  );

  crossStyle$ = this.collect$.pipe(
    map(c => this.getCrosshairStyles(c)),
    filter(a => a != null)
  );

  constructor(
    private dnd: DndService,
    private el: ElementRef
  ) {}

  absToRelative(abs: Offset): Offset {
    return abs && minus(abs, this.rect);
  }

  setWindowRelativeOffset() {
    const o = (this.el.nativeElement as Element).getBoundingClientRect();
    this.rect = {
      x: o.left,
      y: o.top,
      width: o.width,
      height: o.height,
    };
  }

  getXY(spot: Spot, initialOffset: Offset, currentOffset: Offset, emit = false): Offset {
    let offset = clone(currentOffset);

    let diff = minus(currentOffset, initialOffset);

    if (this.snapToGrid) {
      offset = minus(offset, initialOffset);
      offset = this.snappingFunction(offset);
      diff = offset;
      offset = plus(offset, initialOffset);
    }

    if (spot.fromCube) {
      const absoluteUsingOriginalSpot = plus(spot, minus(diff, { x: 16, y: 16 }));
      const clipped = this.getClippedOffset(absoluteUsingOriginalSpot);
      emit && this.moved.emit(clipped);
      return clipped;
    }

    const clipped = this.getClippedOffset(offset);
    emit && this.moved.emit(clipped);
    return clipped;
  }

  getClippedOffset(a: Offset) {
    // you always get x and y relative to the top left of a dragged item.
    // we compensate in the <box-drag-preview>, but we also have to compensate
    // for the size of the original draggable-box such that its centre point can be at (0,0) .
    const b = plus(a, { x: 16, y: 16 });
    return alongEdge(this.rect.width, this.rect.height, b.x, b.y);
  }

  getItemStyles({ item, initialOffset, currentOffset }: Collected) {
    if (!initialOffset || !currentOffset) {
      return {
        display: 'none',
      };
    }

    const { x, y } = this.getXY(item, initialOffset, currentOffset, true);
    const transform = `translate3d(${x}px, ${y}px, 0)`;
    return {
      transform,
      WebkitTransform: transform,
    };
  }

  getCrosshairStyles({ item, initialOffset, currentOffset }: Collected) {
    if (!initialOffset || !currentOffset) {
      return null;
    }
    const clipped = this.getXY(item, initialOffset, currentOffset);
    return fmap(Math.round, clipped);
  }

  ngAfterViewInit() {
    this.setWindowRelativeOffset();
  }

  ngOnDestroy() {
    this.dragLayer.unsubscribe();
  }
}
