import { NgStyle, NgSwitch, NgSwitchCase } from '@angular/common';
import { Component } from '@angular/core';
import { DndMultiBackendModule } from '@ng-dnd/multi-backend';
import { DndSortableModule, DraggedItem, HoverTrigger } from '@ng-dnd/sortable';
import { ItemTypes } from '../item-types';
import { KanbanCardComponent } from '../kanban-card/kanban-card.component';
import { KanbanListComponent } from '../kanban-list/kanban-list.component';
import { Card, SortableSpecService } from '../specs';

@Component({
  selector: 'kanban-board',
  templateUrl: './kanban-board.component.html',
  styleUrls: ['./kanban-board.component.scss'],
  standalone: true,
  imports: [
    DndMultiBackendModule,
    DndSortableModule,
    NgStyle,
    NgSwitch,
    NgSwitchCase,
    KanbanCardComponent,
    KanbanListComponent,
  ],
})
export class KanbanBoardComponent {
  ItemTypes = ItemTypes;
  hoverTrigger = HoverTrigger.fixed;

  constructor(public specs: SortableSpecService) {}

  addCard(listId: number, title: string) {
    // this.store.dispatch(new AddCard(listId, title));
  }

  removeCard(ev: DraggedItem<Card>) {
    // this.store.dispatch(new RemoveCard(ev));
  }
}
