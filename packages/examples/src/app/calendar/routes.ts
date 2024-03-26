import { importProvidersFrom } from '@angular/core';
import { Routes } from '@angular/router';
import { CalendarContainerComponent } from './components/container.component';

import { StoreModule } from '@ngrx/store';
import * as fromCalendar from './store/calendar.reducer';
import { CalendarService } from './store/service';

export const routes: Routes = [
  {
    path: '',
    component: CalendarContainerComponent,
    providers: [
      importProvidersFrom([StoreModule.forFeature('calendar', fromCalendar.reducer)]),
      CalendarService,
    ],
  },
];
