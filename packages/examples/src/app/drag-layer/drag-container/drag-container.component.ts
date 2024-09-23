import { Component, OnDestroy, OnInit } from '@angular/core';
import { DndModule, DndService } from '@ng-dnd/core';
import { BoxWithLocation } from '../BoxWithLocation';
import { DraggableBoxComponent } from '../draggable-box/draggable-box.component';

@Component({
  selector: 'app-drag-container',
  template: `
    <div [style]="styles" [dropTarget]="boxTarget">
      <app-draggable-box [left]="x" [top]="y" [id]="23" title="this box is titled" />
    </div>
  `,
  standalone: true,
  imports: [DndModule, DraggableBoxComponent],
})
export class DragContainerComponent implements OnInit, OnDestroy {
  x = 30;
  y = 90;

  styles = {
    minHeight: '300px',
    maxWidth: '400px',
    maxHeight: '400px',
    width: '100%',
    height: '100%',
    boxSizing: 'border-box',
    border: '1px solid black',
    position: 'relative',
  };

  boxTarget = this.dnd.dropTarget<BoxWithLocation>('BOX', {
    drop: monitor => {
      const delta = monitor.getDifferenceFromInitialOffset()!;
      const item = monitor.getItem()!;
      this.moveBox(item.id, item.left + delta.x, item.top + delta.y);
    },
  });

  constructor(private dnd: DndService) {}

  moveBox(id: any, x: number, y: number) {
    this.x = x;
    this.y = y;
  }

  ngOnInit() {}

  ngOnDestroy() {
    this.boxTarget.unsubscribe();
  }
}
