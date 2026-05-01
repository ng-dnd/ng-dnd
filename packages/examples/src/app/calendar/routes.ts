import { importProvidersFrom } from '@angular/core';
import { Routes } from '@angular/router';
import { CalendarContainer } from './components/container';

import { StoreModule } from '@ngrx/store';
import * as fromCalendar from './store/calendar.reducer';
import { CalendarService } from './store/service';

export const routes: Routes = [
  {
    path: '',
    component: CalendarContainer,
    providers: [
      importProvidersFrom([StoreModule.forFeature('calendar', fromCalendar.reducer)]),
      CalendarService,
    ],
  },
];
