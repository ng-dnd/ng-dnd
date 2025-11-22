import { Component, EventEmitter, Input, OnDestroy, Output, inject } from '@angular/core';
import { DndModule, DndService, Offset } from '@ng-dnd/core';
import { CustomDragLayerComponent } from '../custom-drag-layer/custom-drag-layer.component';
import { snapToGrid } from '../custom-drag-layer/snapToGrid';
import { DraggableBoxComponent } from '../draggable-box/draggable-box.component';
import { Spot } from '../spot';

@Component({
  selector: 'xy-drag-container',
  template: `
    <div class="glow"></div>
    <div class="scanline"></div>

    <div [dropTarget]="boxTarget" class="square">
      @for (i of gridlines; track i) {
        <div class="gridline horizontal" [style.top.px]="px * i - 1"></div>
      }
      @for (i of gridlines; track i) {
        <div class="gridline vertical" [style.left.px]="px * i - 1"></div>
      }
      <xy-draggable-box [spot]="spot" (endDrag)="dragEnded($event)" />
    </div>

    <xy-custom-drag-layer [snapToGrid]="snapToGrid" [incrementPx]="px" (moved)="emitEach($event)" />
  `,
  styleUrl: './drag-container.component.scss',
  imports: [DndModule, DraggableBoxComponent, CustomDragLayerComponent],
})
export class DragContainerComponent implements OnDestroy {
  private dnd = inject(DndService);

  @Input() x = 50;
  @Input() y = 100;

  get spot(): Spot {
    return {
      id: 23,
      x: this.x,
      y: this.y,
    };
  }

  @Output() endDrag = new EventEmitter<void>();
  @Output() moved = new EventEmitter<Offset>();

  @Input() snapToGrid = false;
  px = 32;
  snappingFunction = snapToGrid(this.px);
  gridlines: any[] = [];
  @Input()
  set incrementPx(n: number) {
    this.px = n;
    this.snappingFunction = snapToGrid(n);
    this.setGridlines();
  }

  boxTarget = this.dnd.dropTarget('BOX', {});

  constructor() {
    this.incrementPx = 25;
  }

  emitEach(loc: Offset) {
    this.moved.emit(loc);
  }

  dragEnded(spot: Spot) {
    this.endDrag.emit();
  }

  ngOnDestroy() {
    this.boxTarget.unsubscribe();
  }

  setGridlines() {
    this.gridlines = new Array(Math.floor(400 / this.px) - 1).fill(0).map((_, i) => i + 1);
  }
}
