import { Component, Input } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { AppointmentDialogComponent } from './appointment-dialog/appointment-dialog.component';
import { EnumViewOptions } from './classes/enum-view-options';
import { CalendarControlService } from './services/calendar-control.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  selectedViewOptions: EnumViewOptions = EnumViewOptions.Month;
  enumViewOptions = EnumViewOptions;
  date = new Date();

  constructor(private calendarService: CalendarControlService,
    private appointmentDialog: MatDialog,
    private router: Router) {
      this.router.navigate(['../', this.selectedViewOptions.valueOf()]);
    }

  ngOnInit(){

    this.calendarService.getDate().subscribe(date => {
      this.date = date;
    });
    
  }

  setMonth(increment: number){
    this.calendarService.setMonth(increment);
  }

  openAppointmentDialog() {
    const appointmentDialogRef = this.appointmentDialog.open(AppointmentDialogComponent);
  }
  
  navigateTo(routeValue: string){
    console.log(routeValue);
    this.router.navigate(['../',routeValue]);
  }

}
