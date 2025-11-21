import { AsyncPipe } from '@angular/common';
import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  Input,
  OnInit,
  Optional,
  Output,
} from '@angular/core';
import { DndModule } from '@ng-dnd/core';
import { DndSortableModule, DndSortableRenderer } from '@ng-dnd/sortable';
import { AddCardComponent } from '../add-card.component';
import { Card } from '../card';
import { KanbanCardComponent } from '../kanban-card/kanban-card.component';
import { KanbanList } from '../lists';
import { SortableSpecService } from '../specs';

@Component({
  selector: 'kanban-list',
  templateUrl: './kanban-list.component.html',
  styleUrl: './kanban-list.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [DndModule, DndSortableModule, KanbanCardComponent, AddCardComponent, AsyncPipe],
})
export class KanbanListComponent implements OnInit {
  @Input() list!: KanbanList;
  @Input() preview = false;
  @Output() addCard = new EventEmitter<string>();

  // we won't use these, but you can listen to any old monitor state if you like.
  // there is a shortcut for m.isDragging() for use in a template, called render?.isDragging$
  placeholder$ = this.render && this.render.source.listen(m => m.isDragging());
  isOver$ = this.render && this.render.target.listen(m => m.canDrop() && m.isOver());

  // You can inject any attached directives in a component
  // - When in the <dnd-preview>, the directive isn't attached, so make it @Optional()
  // - Also must be public if you're using it in your template, until the Ivy renderer lands
  constructor(
    public specs: SortableSpecService,
    @Optional() public render?: DndSortableRenderer<KanbanList>
  ) {}

  ngOnInit() {}

  // // If you wanted to listen to properties on the LIST's drop target (to answer
  // // 'is there a card hovering over this kanban-list?'), then you can grab it with a ViewChild.
  // @ViewChild(SkyhookSortable) sortable: SkyhookSortable<Card>;
  // cardHovering$: Observable<boolean>;
  // ngAfterViewInit() {
  //     console.log(this.sortable);
  //     if (this.sortable) {
  //         this.cardHovering$ = this.sortable.target.listen(m => m.canDrop() && m.isOver());
  //     }
  // }

  trackById = (_: number, x: Card) => x.id;
}
