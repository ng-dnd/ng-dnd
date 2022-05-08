import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import { StoreModule } from '@ngrx/store';
import { DndModule } from '@ng-dnd/core';
import { DndMultiBackendModule } from '@ng-dnd/multi-backend';
import { UtilityModule } from '../utility.module';
import { CalendarService } from './store/service';
import * as fromCalendar from './store/calendar.reducer';

import { CalendarContainerComponent } from './components/container.component';
import { CalendarComponent } from './components/calendar.component';
import { CalendarDayComponent } from './components/day.component';
import { CalendarEventComponent } from './components/event.component';

@NgModule({
  declarations: [
    CalendarContainerComponent,
    CalendarComponent,
    CalendarDayComponent,
    CalendarEventComponent,
  ],
  imports: [
    CommonModule,
    UtilityModule,
    DndModule,
    DndMultiBackendModule,
    ReactiveFormsModule,
    StoreModule,
    RouterModule.forChild([{ path: '', component: CalendarContainerComponent }]),
    StoreModule.forFeature('calendar', fromCalendar.reducer),
  ],
  providers: [CalendarService],
})
export class CalendarModule {}
