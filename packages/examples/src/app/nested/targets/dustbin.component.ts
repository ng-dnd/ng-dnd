import { AsyncPipe } from '@angular/common';
import { Component, Input, OnDestroy, inject } from '@angular/core';
import { DndModule, DndService } from '@ng-dnd/core';
import { ItemTypes } from './item-types';

@Component({
  selector: 'app-nested-targets-dustbin',
  template: `
    @if (collected$ | async; as c) {
      <div [dropTarget]="target" class="box" [style.background-color]="getColor(c)">
        <p>{{ greedy ? 'greedy' : 'not greedy' }}</p>
        @if (hasDroppedOnChild || hasDropped) {
          <p>
            {{ 'dropped' + (hasDroppedOnChild ? ' on child' : '') }}
          </p>
        }
        <ng-content select="app-nested-targets-dustbin" />
      </div>
    }
  `,
  styleUrl: './dustbin.component.scss',
  imports: [DndModule, AsyncPipe],
})
export class DustbinComponent implements OnDestroy {
  private dnd = inject(DndService);

  @Input() greedy = false;

  hasDropped = false;
  hasDroppedOnChild = false;

  lastDroppedColor = '';
  backgroundColor = '';

  target = this.dnd.dropTarget(ItemTypes.BOX, {
    drop: monitor => {
      const hasDroppedOnChild = monitor.didDrop();
      if (hasDroppedOnChild && !this.greedy) {
        return;
      }

      this.hasDropped = true;
      this.hasDroppedOnChild = hasDroppedOnChild;
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

  ngOnDestroy() {
    this.target.unsubscribe();
  }
}
