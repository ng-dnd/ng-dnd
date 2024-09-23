import { AsyncPipe } from '@angular/common';
import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { DndModule, DndService, DragSourceSpec } from '@ng-dnd/core';
import { Store, createSelector } from '@ngrx/store';
import { State } from 'app/reducers';
import { combineLatest } from 'rxjs';
import { CalendarEvent } from '../event';
import { ItemTypes } from '../item-types';
import { BeginDragExistingEvent, EndDragExistingEvent } from '../store/calendar.actions';

@Component({
  selector: 'cal-event',
  templateUrl: './event.component.html',
  styleUrls: ['./event.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: true,
  imports: [DndModule, AsyncPipe],
})
export class CalendarEventComponent {
  @Input() event!: CalendarEvent;
  @Input() draggingNew = false;
  @Input() day!: Date;

  // memoize out the span function
  spanSelector = createSelector(
    () => this.event,
    () => this.day,
    (e, day) => {
      return e.span(day);
    }
  );

  get span() {
    return this.spanSelector({});
  }

  source = this.dnd.dragSource(ItemTypes.EXISTING, this.spec('existing'));
  resizeStart = this.dnd.dragSource(ItemTypes.RESIZE_START, this.spec('resize start'));
  resizeEnd = this.dnd.dragSource(ItemTypes.RESIZE_END, this.spec('resize end'));

  draggingEvent$ = combineLatest(
    this.source.listen(m => m.isDragging()),
    this.resizeStart.listen(m => m.isDragging()),
    this.resizeEnd.listen(m => m.isDragging()),
    (a, b, c) => a || b || c
  );

  spec(t: string): DragSourceSpec<{ id: number; start: Date; end: Date }> {
    return {
      isDragging: m => m.getItem()!.id === this.event.uniqueId,
      beginDrag: m => {
        // apparently trying to do CSS/class modifications during dragstart
        // causes dragend to fire immediately
        // https://bugs.chromium.org/p/chromium/issues/detail?id=168544
        // https://github.com/react-dnd/react-dnd/issues/1085
        // so, just wait until the event handler is synchronously handled
        setTimeout(() => {
          this.store.dispatch(new BeginDragExistingEvent(this.event.uniqueId));
        }, 0);
        return { id: this.event.uniqueId, start: this.day, end: this.event.end };
      },
      endDrag: monitor => {
        if (!monitor.didDrop()) {
          this.store.dispatch(new EndDragExistingEvent(this.event.uniqueId));
        }
      },
    };
  }

  constructor(
    private dnd: DndService,
    private store: Store<State>
  ) {}
}
