import { Component, Input } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { AppointmentDialogComponent } from './appointment-dialog/appointment-dialog.component';
import { CalendarControlService } from './services/calendar-control.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  title = 'ng-calendar-app';
  
  date = new Date();

  constructor(private calendarService: CalendarControlService,
    public appointmentDialog: MatDialog) {}

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

    appointmentDialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }
  
}
