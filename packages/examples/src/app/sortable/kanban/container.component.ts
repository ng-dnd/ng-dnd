import { AfterViewInit, Component, ElementRef, OnDestroy } from '@angular/core';
import { ExampleLinkComponent } from '@app/utility/example-link.component';
import { DndService } from '@ng-dnd/core';
import { spillTarget } from '@ng-dnd/sortable';
import { Store } from '@ngrx/store';
import { Card } from './card';
import { ItemTypes } from './item-types';
import { KanbanBoardComponent } from './kanban-board/kanban-board.component';
import { Spill } from './store';

@Component({
  selector: 'kanban-container',
  templateUrl: './container.component.html',
  styleUrls: ['./container.component.scss'],
  standalone: true,
  imports: [ExampleLinkComponent, KanbanBoardComponent],
})
export class ContainerComponent implements AfterViewInit, OnDestroy {
  // this emits a 'hover' only once when you move over the spill area
  // and again if you move over another drop target and come back.
  // note: uses isOver({shallow:true}), so you can stack other targets on top
  // and they won't be considered 'spilled'
  cardSpill = spillTarget<Card>(this.dnd, ItemTypes.CARD, {
    // see implementation details in store.ts
    hover: item => this.store.dispatch(new Spill(item)),
    // can also add a drop method, useful for 'remove on spill' functionality
    // drop: item => this.store.dispatch(new RemoveCard(item))
  });

  constructor(
    private dnd: DndService,
    private el: ElementRef,
    private store: Store<unknown>
  ) {}

  ngAfterViewInit() {
    // spill = anywhere in this container component
    // could easily be document.body
    this.cardSpill.connectDropTarget(this.el.nativeElement);
  }
  ngOnDestroy() {
    // it's a regular drop target! don't forget to unsubscribe.
    this.cardSpill.unsubscribe();
  }
}
