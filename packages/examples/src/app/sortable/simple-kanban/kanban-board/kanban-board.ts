import { Component, inject } from '@angular/core';
import { DndMultiBackendModule } from '@ng-dnd/multi-backend';
import { DndSortableModule, DraggedItem, HoverTrigger } from '@ng-dnd/sortable';
import { ItemTypes } from '../item-types';
import { KanbanCard } from '../kanban-card/kanban-card';
import { KanbanList } from '../kanban-list/kanban-list';
import { Card, SortableSpecService } from '../specs';

@Component({
  selector: 'kanban-board',
  templateUrl: './kanban-board.html',
  styleUrl: './kanban-board.scss',
  imports: [DndMultiBackendModule, DndSortableModule, KanbanCard, KanbanList],
})
export class KanbanBoard {
  specs = inject(SortableSpecService);

  ItemTypes = ItemTypes;
  hoverTrigger = HoverTrigger.fixed;

  addCard(listId: number, title: string) {
    // this.store.dispatch(new AddCard(listId, title));
  }

  removeCard(ev: DraggedItem<Card>) {
    // this.store.dispatch(new RemoveCard(ev));
  }
}
