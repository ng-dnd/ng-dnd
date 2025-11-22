import { AsyncPipe, NgTemplateOutlet } from '@angular/common';
import {
  ChangeDetectionStrategy,
  Component,
  ContentChild,
  Directive,
  ElementRef,
  EventEmitter,
  Input,
  OnDestroy,
  Output,
  TemplateRef,
  inject,
} from '@angular/core';
import { DndModule, DndService } from '@ng-dnd/core';

interface Card {
  id: number;
  text: string;
}

interface DraggingCard {
  id: number;
  index: number;
}

@Directive({
  selector: '[cardInner]',
})
export class CardInnerDirective {}

@Component({
  selector: 'app-card',
  template: `
    <div
      class="card"
      [dropTarget]="cardTarget"
      [dragSource]="cardSource"
      [style.opacity]="opacity$ | async"
    >
      <div class="border">
        <ng-container *ngTemplateOutlet="cardInnerTemplate; context: { $implicit: card }" />
      </div>
    </div>
  `,
  // Note: don't use margins, use padding. This way, there are no gaps to hover over.
  styles: `
    .card {
      margin-bottom: 0.25rem;
      background-color: white;
      cursor: move;
    }
    .border {
      padding: 0.5rem 1rem;
      border: 1px dashed gray;
    }
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [DndModule, NgTemplateOutlet, AsyncPipe],
})
export class CardComponent implements OnDestroy {
  private elRef = inject(ElementRef);
  private dnd = inject(DndService);

  @Output() beginDrag: EventEmitter<void> = new EventEmitter<void>();
  @Output() endDrag = new EventEmitter<boolean>();
  @Output() handleMove = new EventEmitter<[number, number]>();

  @ContentChild(CardInnerDirective, { read: TemplateRef }) cardInnerTemplate!: TemplateRef<any>;

  @Input() card!: Card;

  @Input() index!: number;
  @Input() id!: number;
  @Input() text!: string;

  cardSource = this.dnd.dragSource<DraggingCard>('CARD', {
    beginDrag: () => {
      this.beginDrag.emit();
      return {
        id: this.id,
        index: this.index,
      };
    },
    endDrag: monitor => {
      const didDrop = monitor.didDrop();
      this.endDrag.emit(didDrop);
    },
  });

  cardTarget = this.dnd.dropTarget<DraggingCard>('CARD', {
    hover: monitor => {
      const dragIndex = monitor.getItem()!.index;
      const hoverIndex = this.index;

      // Don't replace items with themselves
      if (dragIndex === hoverIndex) {
        return;
      }

      // Determine rectangle on screen
      const hoverBoundingRect = this.elRef.nativeElement.getBoundingClientRect();

      // Get vertical middle
      const hoverMiddleY = (hoverBoundingRect.bottom - hoverBoundingRect.top) / 2;

      // Determine mouse position
      const clientOffset = monitor.getClientOffset()!;

      // Get pixels to the top
      const hoverClientY = clientOffset.y - hoverBoundingRect.top;

      // Only perform the move when the mouse has crossed half of the items height
      // When dragging downwards, only move when the cursor is below 50%
      // When dragging upwards, only move when the cursor is above 50%

      // Dragging downwards
      if (dragIndex < hoverIndex && hoverClientY < hoverMiddleY) {
        return;
      }

      // Dragging upwards
      if (dragIndex > hoverIndex && hoverClientY > hoverMiddleY) {
        return;
      }

      // console.log("moving card")

      // Time to actually perform the action
      this.handleMove.emit([dragIndex, hoverIndex]);

      // Note: we're mutating the item here!
      // Generally it's better to avoid mutations,
      // but it's good here for the sake of performance
      // to avoid expensive index searches.
      monitor.getItem()!.index = hoverIndex;
    },
  });

  isDragging$ = this.cardSource.listen(m => m.isDragging());

  opacity$ = this.cardSource.listen(monitor => (monitor.isDragging() ? 0.2 : 1));

  moveCard(a: number, b: number) {
    this.handleMove.emit([a, b]);
  }

  ngOnDestroy() {
    this.cardSource.unsubscribe();
    this.cardTarget.unsubscribe();
  }
}
