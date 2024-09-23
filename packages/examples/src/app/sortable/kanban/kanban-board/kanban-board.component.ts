import { ChangeDetectionStrategy, Component } from '@angular/core';
import { DndMultiBackendModule } from '@ng-dnd/multi-backend';
import { DndSortableModule, DraggedItem, HoverTrigger } from '@ng-dnd/sortable';
import { Store } from '@ngrx/store';
import { Card } from '../card';
import { KanbanExternalComponent } from '../external.component';
import { ItemTypes } from '../item-types';
import { KanbanCardComponent } from '../kanban-card/kanban-card.component';
import { KanbanListComponent } from '../kanban-list/kanban-list.component';
import { SortableSpecService } from '../specs';
import { AddCard, RemoveCard } from '../store';
import { TrashCanComponent } from '../trash-can.component';

@Component({
  selector: 'kanban-board',
  templateUrl: './kanban-board.component.html',
  styleUrl: './kanban-board.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: true,
  imports: [
    DndMultiBackendModule,
    DndSortableModule,
    KanbanCardComponent,
    KanbanListComponent,
    KanbanExternalComponent,
    TrashCanComponent,
  ],
})
export class KanbanBoardComponent {
  ItemTypes = ItemTypes;
  hoverTrigger = HoverTrigger.fixed;

  constructor(
    private store: Store<unknown>,
    public specs: SortableSpecService
  ) {}

  addCard(listId: number, title: string) {
    this.store.dispatch(new AddCard(listId, title));
  }

  removeCard(ev: DraggedItem<Card>) {
    this.store.dispatch(new RemoveCard(ev));
  }
}
