import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { DndMultiBackendModule } from '@ng-dnd/multi-backend';
import { DndSortableModule, DraggedItem, HoverTrigger } from '@ng-dnd/sortable';
import { Store } from '@ngrx/store';
import { Card } from '../card';
import { KanbanExternal } from '../external';
import { ItemTypes } from '../item-types';
import { KanbanCard } from '../kanban-card/kanban-card';
import { KanbanList } from '../kanban-list/kanban-list';
import { SortableSpecService } from '../specs';
import { AddCard, RemoveCard } from '../store';
import { TrashCan } from '../trash-can';

@Component({
  selector: 'kanban-board',
  templateUrl: './kanban-board.html',
  styleUrl: './kanban-board.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [
    DndMultiBackendModule,
    DndSortableModule,
    KanbanCard,
    KanbanList,
    KanbanExternal,
    TrashCan,
  ],
})
export class KanbanBoard {
  private store = inject<Store<unknown>>(Store);
  specs = inject(SortableSpecService);

  ItemTypes = ItemTypes;
  hoverTrigger = HoverTrigger.fixed;

  addCard(listId: number, title: string) {
    this.store.dispatch(new AddCard(listId, title));
  }

  removeCard(ev: DraggedItem<Card>) {
    this.store.dispatch(new RemoveCard(ev));
  }
}
