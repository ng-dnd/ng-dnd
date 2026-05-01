import {
  AfterViewInit,
  ChangeDetectionStrategy,
  Component,
  ElementRef,
  OnDestroy,
  inject,
} from '@angular/core';
import { ExampleLink } from '@app/utility/example-link';
import { DndService } from '@ng-dnd/core';
import { spillTarget } from '@ng-dnd/sortable';
import { ItemTypes } from './item-types';
import { KanbanBoard } from './kanban-board/kanban-board';
import { Card } from './specs';

@Component({
  selector: 'kanban-container',
  templateUrl: './container.html',
  styleUrl: './container.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [ExampleLink, KanbanBoard],
})
export class Container implements AfterViewInit, OnDestroy {
  private dnd = inject(DndService);
  private el = inject(ElementRef);

  // this emits a 'hover' only once when you move over the spill area
  // and again if you move over another drop target and come back.
  // note: uses isOver({shallow:true}), so you can stack other targets on top
  // and they won't be considered 'spilled'
  cardSpill = spillTarget<Card>(this.dnd, ItemTypes.CARD, {
    // see implementation details in store.ts
    // hover: item => this.store.dispatch(new Spill(item)),
    // can also add a drop method, useful for 'remove on spill' functionality
    // drop: item => this.store.dispatch(new RemoveCard(item))
  });

  ngAfterViewInit() {
    // spill = anywhere in this container component
    // could easily be document.body
    // this.cardSpill.connectDropTarget(this.el.nativeElement);
  }

  ngOnDestroy() {
    // it's a regular drop target! don't forget to unsubscribe.
    this.cardSpill.unsubscribe();
  }
}
