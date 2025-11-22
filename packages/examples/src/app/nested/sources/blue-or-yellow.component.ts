import { AsyncPipe } from '@angular/common';
import { Component, Input, OnDestroy, inject } from '@angular/core';
import { DndModule, DndService } from '@ng-dnd/core';
import { Colors } from './colors';

@Component({
  selector: 'app-blue-or-yellow',
  template: `
    <div
      [dragSource]="source"
      class="pushright"
      [class.dragging]="isDragging$ | async"
      [style.background-color]="backgroundColor"
    >
      <label>
        <input type="checkbox" value="forbid" (change)="toggle()" name="toggle" /> Forbid drag
      </label>
      <ng-content select="app-blue-or-yellow" />
    </div>
  `,
  styles: `
    :host {
      display: block;
      color: #777;
    }
    .pushright {
      margin-top: 15px;
      padding: 15px;
      border: 1px dashed #777;
    }
    .dragging {
      opacity: 0.5;
    }
  `,
  imports: [DndModule, AsyncPipe],
})
export class BlueOrYellowComponent implements OnDestroy {
  private dnd = inject(DndService);

  Colors = Colors;

  backgroundColor = '';
  @Input() set color(c: string) {
    this.source.setType(c);

    switch (c) {
      case Colors.YELLOW:
        this.backgroundColor = 'lightgoldenrodyellow';
        break;
      case Colors.BLUE:
        this.backgroundColor = 'lightblue';
        break;
    }
  }

  source = this.dnd.dragSource(null, {
    beginDrag: () => ({}),
    canDrag: () => !this.forbid,
  });

  isDragging$ = this.source.listen(m => m.isDragging());

  @Input() forbid = false;
  toggle() {
    this.forbid = !this.forbid;
  }

  ngOnDestroy() {
    this.source.unsubscribe();
  }
}
