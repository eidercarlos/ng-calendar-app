import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'month-view',
    loadChildren: () => import('./month-calendar-view/month-view.module').then(m => m.MonthViewModule),
  },
  {
    path: 'week-view',
    loadChildren: () => import('./week-calendar-view/week-view.module').then(m => m.WeekViewModule),
  },
  {
    path: 'day-view',
    loadChildren: () => import('./day-calendar-view/day-view.module').then(m => m.DayViewModule),
  },
  {
    path: '**',
    redirectTo: 'month-view',
    pathMatch: 'full'
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
