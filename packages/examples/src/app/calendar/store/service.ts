import { Injectable, inject } from '@angular/core';
import { Store, createFeatureSelector, select } from '@ngrx/store';
import { State } from 'app/reducers';
import { CalendarState } from './calendar.reducer';

@Injectable()
export class CalendarService {
  private store = inject<Store<State>>(Store);

  feat = createFeatureSelector<CalendarState>('calendar');
  calendar = this.store.pipe(select(this.feat));
}
