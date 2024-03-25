import { AsyncPipe, NgFor } from '@angular/common';
import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { CalendarState } from 'app/calendar/store/calendar.reducer';
import { Week } from 'app/calendar/week';
import { Moment } from 'moment-mini-ts';
import { ResetCalendar } from '../store/calendar.actions';
import { weeksSelector } from '../store/selectors';
import { CalendarDayComponent } from './day.component';

@Component({
  selector: 'cal-calendar',
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './calendar.component.html',
  styleUrls: ['./calendar.component.scss'],
  standalone: true,
  imports: [NgFor, CalendarDayComponent, AsyncPipe],
})
export class CalendarComponent implements OnInit {
  weeks$ = this.store.pipe(select(weeksSelector)) as any;

  constructor(private store: Store<CalendarState>) {}

  trackWeek(_: number, week: Week) {
    return week.uniqueId;
  }

  trackDay(i: number, day: Moment) {
    return i;
  }

  ngOnInit() {
    this.store.dispatch(new ResetCalendar());
  }
}
