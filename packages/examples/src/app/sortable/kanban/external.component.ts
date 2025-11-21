import { Component } from '@angular/core';
import { DndModule } from '@ng-dnd/core';
import { DndSortableModule, SortableSpec } from '@ng-dnd/sortable';
import { Card } from './card';
import { ItemTypes } from './item-types';
import { KanbanCardComponent } from './kanban-card/kanban-card.component';
import { SortableSpecService } from './specs';

@Component({
  selector: 'kanban-external',
  template: `
    <div class="ext">
      <kanban-card
        [dndSortableExternal]="externalSpec"
        #ext="dndSortableExternal"
        [card]="card"
        [dragSource]="ext.source"
        [noHTML5Preview]="true"
      />
    </div>
  `,
  styles: `
    .ext {
      margin-right: 8px;
      margin-bottom: 8px;
      display: inline-block;
    }
  `,
  imports: [KanbanCardComponent, DndSortableModule, DndModule],
})
export class KanbanExternalComponent {
  ItemTypes = ItemTypes;

  // create some dummy data to pass to kanban-card
  card: Card = {
    id: 1337,
    title: 'External card - drag me in!',
  };

  nextId = 3000000;

  externalSpec: SortableSpec<Card> = {
    ...this.specs.listSpec,
    beginDrag: () => {
      // do nothing
      // we don't want to remove any cards from the store, because this external card isn't in it yet
      // you could also just check the listId being === to EXTERNAL_LIST
      // import { EXTERNAL_LIST } from '@ng-dnd/sortable';
      // case SortableEvents.BeginDrag:
      //      if (action.item.listId === EXTERNAL_LIST) return state;
      //      ...
    },
    createData: () => {
      return {
        id: this.nextId++,
        title: this.card.title,
      };
    },
  };

  constructor(private specs: SortableSpecService) {}
}
