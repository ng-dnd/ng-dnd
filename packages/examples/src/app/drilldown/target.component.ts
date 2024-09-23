import { AsyncPipe } from '@angular/common';
import { Component, Input, OnDestroy } from '@angular/core';
import { DndModule, DndService } from '@ng-dnd/core';
import { ItemTypes } from './itemTypes';

@Component({
  selector: 'drilldown-target',
  template: `
    @if (collected$ | async; as c) {
      <div [dropTarget]="target" class="box" [style.background-color]="getColor(c)">
        <p>{{ greedy ? 'greedy' : 'not greedy' }}</p>
        @if (hasDroppedOnChild || hasDropped) {
          <p>
            {{ 'dropped' + (hasDroppedOnChild ? ' on child' : '') }}
          </p>
        }
        <ng-content></ng-content>
      </div>
    }
  `,
  styles: [
    `
      p {
        margin: 0;
        padding: 2px;
      }
      .box {
        border: 1px solid rgba(0, 0, 0, 0.2);
        min-height: 8rem;
        min-width: 8rem;
        color: white;
        padding: 2rem;
        padding-top: 1rem;
        margin: 1rem;
        text-align: center;
        font-size: 1rem;
        background-color: rgba(0, 0, 0, 0.5);
      }
    `,
  ],
  standalone: true,
  imports: [DndModule, AsyncPipe],
})
export class TargetComponent implements OnDestroy {
  @Input() greedy = false;

  hasDropped = false;
  hasDroppedOnChild = false;

  lastDroppedColor = '';
  backgroundColor = '';

  target = this.dnd.dropTarget(ItemTypes.EMAIL, {
    drop: monitor => {
      const hasDroppedOnChild = monitor.didDrop();
      if (hasDroppedOnChild && !this.greedy) {
        return;
      }

      (this.hasDropped = true), (this.hasDroppedOnChild = hasDroppedOnChild);
    },
  });

  collected$ = this.target.listen(monitor => ({
    isOver: monitor.isOver(),
    isOverCurrent: monitor.isOver({ shallow: true }),
  }));

  text() {
    return (this.hasDropped && `dropped${this.hasDroppedOnChild ? ' on child' : ''}`) || '';
  }

  getColor({ isOver, isOverCurrent }: { isOver: boolean; isOverCurrent: boolean }) {
    if (isOverCurrent || (isOver && this.greedy)) {
      return 'darkgreen';
    }
  }

  constructor(private dnd: DndService) {}

  ngOnDestroy() {
    this.target.unsubscribe();
  }
}
