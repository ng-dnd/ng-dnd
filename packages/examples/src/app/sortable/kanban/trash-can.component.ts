import { AsyncPipe } from '@angular/common';
import { ChangeDetectionStrategy, Component, EventEmitter, Output } from '@angular/core';
import { DndModule, DndService } from '@ng-dnd/core';
import { DraggedItem } from '@ng-dnd/sortable';
import { Card } from './card';
import { ItemTypes } from './item-types';

@Component({
  selector: 'kanban-trash-can',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    @if (collect$ | async; as c) {
      <div
        class="trash-can"
        [class.isOver]="c.isOver"
        [dropTarget]="target"
        >
        <div>
          <i class="fas fa-trash-alt"></i>
          <span>Drop here to delete</span>
        </div>
        <div class="space" [style]="getStyle(c.isOver, c.item!)"></div>
      </div>
    }
    `,
  styles: [
    `
      .fas {
        margin-right: 8px;
      }
      .trash-can {
        margin: 8px;
        padding: 8px;
        font-weight: 700;
        text-shadow: 1px 1px rgba(255, 255, 255, 0.2);
        border-radius: 4px;
        border: 1px dashed #333;
        text-align: center;
        transform-origin: 100% 100%;
        transition: transform 50ms ease-out;
      }
      .space {
        height: 0;
        width: 0;
        transition: all 50ms ease-out;
      }
      .isOver {
        transition: transform 50ms ease-in;
        background: rgba(255, 255, 255, 0.4);
        transform: scale(1.2);
      }
    `,
  ],
  standalone: true,
  imports: [DndModule, AsyncPipe],
})
export class TrashCanComponent {
  @Output() dropped = new EventEmitter<DraggedItem<Card>>();

  target = this.dnd.dropTarget<DraggedItem<Card>>(ItemTypes.CARD, {
    canDrop: monitor => {
      return monitor.getItem()!.isInternal!;
    },
    drop: monitor => {
      this.dropped.emit(monitor.getItem()!);
    },
  });

  collect$ = this.target.listen(m => ({
    item: m.getItem(),
    isOver: m.isOver() && m.canDrop(),
  }));

  constructor(private dnd: DndService) {}

  getStyle(isOver: boolean, item: DraggedItem<Card>) {
    if (!isOver || !item) {
      return {};
    }
    return {
      ...item.size.style(),
      transition: 'all 50ms ease-in',
    };
  }
}
