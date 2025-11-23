import { AsyncPipe } from '@angular/common';
import { Component, EventEmitter, Input, Output, inject } from '@angular/core';
import { DndModule } from '@ng-dnd/core';
import { DndSortableModule, DndSortableRenderer } from '@ng-dnd/sortable';
import { KanbanCardComponent } from '../kanban-card/kanban-card.component';
import { Card, CardList, SortableSpecService } from '../specs';

@Component({
  selector: 'kanban-list',
  templateUrl: './kanban-list.component.html',
  styleUrl: './kanban-list.component.scss',
  imports: [DndModule, DndSortableModule, KanbanCardComponent, AsyncPipe],
})
export class KanbanListComponent {
  // You can inject any attached directives in a component
  // - When in the <dnd-preview>, the directive isn't attached, so make it @Optional()
  // - Also must be public if you're using it in your template, until the Ivy renderer lands
  specs = inject(SortableSpecService);
  render = inject<DndSortableRenderer<CardList>>(DndSortableRenderer, { optional: true });

  @Input() list!: CardList;
  @Input() preview = false;
  @Output() addCard = new EventEmitter<string>();

  // we won't use these, but you can listen to any old monitor state if you like.
  // there is a shortcut for m.isDragging() for use in a template, called render?.isDragging$
  placeholder$ = this.render && this.render.source.listen(m => m.isDragging());
  isOver$ = this.render && this.render.target.listen(m => m.canDrop() && m.isOver());

  trackById = (_: number, x: Card) => x.id;
}
