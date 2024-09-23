import { AsyncPipe } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { ExampleLinkComponent } from '@app/utility/example-link.component';
import { Store, createSelector } from '@ngrx/store';
import { NextMonth, PrevMonth } from 'app/calendar/store/calendar.actions';
import { State } from 'app/reducers';
import { startDateSelector } from '../store/selectors';
import { CalendarComponent } from './calendar.component';

const monthSelector = createSelector(startDateSelector, startDate => {
  return startDate.format('MMMM YYYY');
});

@Component({
  selector: 'cal-container',
  templateUrl: './container.component.html',
  styleUrl: './container.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: true,
  imports: [ExampleLinkComponent, CalendarComponent, AsyncPipe],
})
export class CalendarContainerComponent {
  month$ = this.store.select(monthSelector);

  constructor(private store: Store<State>) {}

  prevMonth() {
    this.store.dispatch(new PrevMonth());
  }

  nextMonth() {
    this.store.dispatch(new NextMonth());
  }
}
