import { AsyncPipe } from '@angular/common';
import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { ExampleLink } from '@app/utility/example-link';
import { Store, createSelector } from '@ngrx/store';
import { NextMonth, PrevMonth } from 'app/calendar/store/calendar.actions';
import { State } from 'app/reducers';
import { startDateSelector } from '../store/selectors';
import { Calendar } from './calendar';

const monthSelector = createSelector(startDateSelector, startDate => {
  return startDate.format('MMMM YYYY');
});

@Component({
  selector: 'cal-container',
  templateUrl: './container.html',
  styleUrl: './container.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [ExampleLink, Calendar, AsyncPipe],
})
export class CalendarContainer {
  private store = inject<Store<State>>(Store);

  month$ = this.store.select(monthSelector);

  prevMonth() {
    this.store.dispatch(new PrevMonth());
  }

  nextMonth() {
    this.store.dispatch(new NextMonth());
  }
}
