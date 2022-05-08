import { Input, Component, OnDestroy } from '@angular/core';
import { DndService } from '@ng-dnd/core';
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
      <ng-content select="app-blue-or-yellow"></ng-content>
    </div>
  `,
  styles: [
    `
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
  ],
})
export class BlueOrYellowComponent implements OnDestroy {
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

  constructor(private dnd: DndService) {}

  ngOnDestroy() {
    this.source.unsubscribe();
  }
}
