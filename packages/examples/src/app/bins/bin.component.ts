import { AsyncPipe, JsonPipe } from '@angular/common';
import { Component, Input, OnDestroy, OnInit, inject } from '@angular/core';
import { DndModule, DndService } from '@ng-dnd/core';

@Component({
  selector: 'app-bin',
  template: `
    @if (collected$ | async; as c) {
      <div class="dustbin pad" [dropTarget]="trashTarget" [style]="getStyles(c)">
        <p>
          <b>
            {{ c.canDrop ? 'drop ' + c.itemType + ' in the' : '' }}
            {{ c.isOver && !hasCapacity ? 'cannot drop, ' : '' }}
            {{ name }}
            {{ hasCapacity ? '' : ' is full!' }}
          </b>
        </p>
        <p>
          <button (click)="empty()">empty {{ name }}</button>
        </p>
        <pre>{{ trashes | json }}</pre>
      </div>
    }
  `,
  imports: [DndModule, AsyncPipe, JsonPipe],
})
export class BinComponent implements OnInit, OnDestroy {
  private dnd = inject(DndService);

  @Input() name = '';
  @Input() accepts: string[] = ['TRASH'];
  trashes: string[] = [];
  capacity = 6;

  get hasCapacity() {
    return this.trashes.length < this.capacity;
  }

  trashTarget = this.dnd.dropTarget(null, {
    canDrop: monitor => {
      return this.hasCapacity;
    },
    drop: monitor => {
      // item is what we returned from beginDrag on the source
      const type = monitor.getItemType() as string;
      this.trashes.unshift(type);
    },
  });

  collected$ = this.trashTarget.listen(m => ({
    isOver: m.isOver(),
    canDrop: m.canDrop(),
    itemType: m.getItemType() as string, // TODO: type
  }));

  getStyles({ isOver, canDrop }: { isOver: boolean; canDrop: boolean }) {
    return {
      backgroundColor: isOver && canDrop ? '#cfcffc' : canDrop ? '#fffacf' : 'white',
    };
  }

  empty() {
    this.trashes = [];
  }

  ngOnInit() {
    this.trashTarget.setTypes(this.accepts);
  }

  ngOnDestroy() {
    this.trashTarget.unsubscribe();
  }
}
