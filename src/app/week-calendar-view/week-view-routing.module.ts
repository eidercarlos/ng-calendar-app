import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { WeekCalendarViewComponent } from './week-calendar-view.component';

const routes: Routes = [
  {
    path: '',
    component: WeekCalendarViewComponent,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class WeekViewRoutingModule { }
