import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DayCalendarViewComponent } from './day-calendar-view.component';

const routes: Routes = [
  {
    path: '',
    component: DayCalendarViewComponent,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DayViewRoutingModule { }
