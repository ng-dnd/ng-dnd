import { AsyncPipe } from '@angular/common';
import { ChangeDetectionStrategy, Component, OnInit, inject } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { Moment } from 'moment-mini-ts';
import { Observable } from 'rxjs';
import { ResetCalendar } from '../store/calendar.actions';
import { CalendarState } from '../store/calendar.reducer';
import { weeksSelector } from '../store/selectors';
import { Week } from '../week';
import { CalendarDay } from './day';

@Component({
  selector: 'cal-calendar',
  templateUrl: './calendar.html',
  styleUrl: './calendar.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [CalendarDay, AsyncPipe],
})
export class Calendar implements OnInit {
  private store = inject<Store<CalendarState>>(Store);

  weeks$ = this.store.pipe(select(weeksSelector)) as Observable<any>;

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
