import { AsyncPipe } from '@angular/common';
import { Component, OnDestroy, inject } from '@angular/core';
import { DndModule, DndService } from '@ng-dnd/core';
import { map } from 'rxjs/operators';
import { Colors } from './colors';

@Component({
  selector: 'app-nested-source-targetbox',
  template: `
    <div
      [dropTarget]="target"
      class="box"
      [class.fade]="fade$ | async"
      [style.background-color]="draggingColor$ | async"
    >
      <p>Drop here.</p>
      @if ((canDrop$ | async) !== true && !!lastDroppedColor) {
        <p [style.background-color]="backgroundColor" [style.padding.px]="5">
          Last dropped: {{ lastDroppedColor }}
        </p>
      }
    </div>
  `,
  styles: `
    .box {
      font-size: 120%;
      color: #777;
      margin-top: 15px;
      max-width: 300px;
      height: 200px;
      padding: 20px;
      border: 1px dashed #777;
      text-align: center;
    }
    .fade {
      opacity: 0.5;
    }
  `,
  imports: [DndModule, AsyncPipe],
})
export class TargetBoxComponent implements OnDestroy {
  private dnd = inject(DndService);

  Colors = Colors;

  lastDroppedColor = '';
  backgroundColor = '';

  target = this.dnd.dropTarget([Colors.BLUE, Colors.YELLOW], {
    drop: monitor => {
      this.lastDroppedColor = monitor.getItemType() as string;
    },
  });

  canDrop$ = this.target.listen(m => m.canDrop());
  fade$ = this.target.listen(m => m.canDrop() && !m.isOver());
  draggingColor$ = this.target.listen(m => m.getItemType()).pipe(map(t => this.cssColor(t!)));

  cssColor(c: string | symbol) {
    switch (c) {
      case Colors.YELLOW:
        return 'lightgoldenrodyellow';
      case Colors.BLUE:
        return 'lightblue';
      default:
        return '#fff';
    }
  }

  ngOnDestroy() {
    this.target.unsubscribe();
  }
}
