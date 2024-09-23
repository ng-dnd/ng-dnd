import { AsyncPipe } from '@angular/common';
import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { CalendarState } from 'app/calendar/store/calendar.reducer';
import { Week } from 'app/calendar/week';
import { Moment } from 'moment-mini-ts';
import { Observable } from 'rxjs';
import { ResetCalendar } from '../store/calendar.actions';
import { weeksSelector } from '../store/selectors';
import { CalendarDayComponent } from './day.component';

@Component({
  selector: 'cal-calendar',
  templateUrl: './calendar.component.html',
  styleUrl: './calendar.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: true,
  imports: [CalendarDayComponent, AsyncPipe],
})
export class CalendarComponent implements OnInit {
  weeks$ = this.store.pipe(select(weeksSelector)) as Observable<any>;

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
