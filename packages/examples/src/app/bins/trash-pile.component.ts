import { AsyncPipe } from '@angular/common';
import { Component, Input, OnChanges, OnDestroy } from '@angular/core';
import { DndModule, DndService } from '@ng-dnd/core';
import { TrashComponent } from './trash.component';

@Component({
  selector: 'app-trash-pile',
  template: `
    @if (collected$ | async; as c) {
      <p>
        <button (click)="litter()">add more</button>
        <span>({{ remain }} left)</span>
      </p>
      <div [dragSource]="trashSource" [class.dragging]="c.isDragging && remain > 1">
        <app-trash
          [type]="type"
          [empty]="remain === 0 || (c.isDragging && remain === 1)"
        ></app-trash>
      </div>
    }
  `,
  styles: [
    `
      .dragging {
      }
    `,
  ],
  standalone: true,
  imports: [DndModule, TrashComponent, AsyncPipe],
})
export class TrashPileComponent implements OnChanges, OnDestroy {
  @Input() type = '';
  remain = 5;
  count = 0;

  trashSource = this.dnd.dragSource(null, {
    canDrag: monitor => this.remain > 0,
    beginDrag: monitor => {
      // the return value here is the 'item' that's in-flight
      // think of it like
      // interface WrappedItem { type: "TRASH"; item: { count: number; } }
      // later, monitor.getItemType() gives you type;
      // and    monitor.getItem() gives you item.
      return { count: this.count++ };
    },
    endDrag: monitor => {
      // console.log(monitor.getItem());
      if (monitor.didDrop()) {
        this.remain--;
        // you might fire an action here
        // monitor.getDropResult() gives you { ...target.drop(), dropEffect: 'move'|'copy'|'link'|'none' }
        // so if you returned { abc: 123 } from target.drop(), you would get { dropEffect: 'move', abc: 123 }
        // console.log(monitor.getDropResult());
      }
    },
  });

  // listen will apply distinctUntilChanged(===) on scalars and most types
  isDragging$ = this.trashSource.listen(m => m.isDragging());
  // it will also apply distinctUntilChanged(shallowEqual) on { objects }
  collected$ = this.trashSource.listen(monitor => ({
    isDragging: monitor.isDragging(),
    canDrag: monitor.canDrag(),
    itemType: monitor.getItemType(),
  }));

  // use this with

  // <ng-container *ngIf="collected$|async as coll">
  //   {{coll.itemType || 'not dragging' }}
  //   more content
  // </ng-container>

  constructor(private dnd: DndService) {}

  ngOnChanges() {
    this.trashSource.setType(this.type);
  }

  ngOnDestroy() {
    this.trashSource.unsubscribe();
  }

  litter() {
    this.remain += 5;
  }
}
