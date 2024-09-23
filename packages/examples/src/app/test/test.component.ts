import { AsyncPipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { DndModule, DndService } from '@ng-dnd/core';

@Component({
  selector: 'app-test',
  template: `<p [dragSource]="source" [class.dragging]="isDragging$ | async">test works!</p>`,
  standalone: true,
  imports: [DndModule, AsyncPipe],
})
export class TestComponent implements OnInit {
  dropped = false;
  endDrag = false;

  source = this.dnd.dragSource('TYPE', {
    beginDrag: monitor => {
      return { x: 5 };
    },
    endDrag: monitor => {
      this.endDrag = true;
    },
  });

  target = this.dnd.dropTarget('TYPE', {
    drop: monitor => {
      this.dropped = true;
    },
  });

  isDragging$ = this.source.listen(m => m.isDragging());

  constructor(private dnd: DndService) {}

  ngOnInit() {}
}
