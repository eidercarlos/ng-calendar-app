import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from '../app.component';
import { MonthCalendarViewComponent } from './month-calendar-view.component';

const routes: Routes = [
  {
    path: '',
    component: MonthCalendarViewComponent,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MonthViewRoutingModule { }
