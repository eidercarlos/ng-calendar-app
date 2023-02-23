import { Component, EventEmitter, Input, Output } from '@angular/core';
import { appointment } from '../classes/appointment';
import { CalendarControlService } from '../services/calendar-control.service';
import {CdkDragDrop, moveItemInArray, transferArrayItem} from '@angular/cdk/drag-drop';
import { MatDialog } from '@angular/material/dialog';
import { AppointmentDialogComponent } from '../appointment-dialog/appointment-dialog.component';

@Component({
  selector: 'app-month-calendar-view',
  templateUrl: './month-calendar-view.component.html',
  styleUrls: ['./month-calendar-view.component.scss']
})
export class MonthCalendarViewComponent {

  dateList: Array<Date> = [];
  days = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
  date = new Date();

  appointmentsDropListData : appointment[] = [];

  private _appointmentList: appointment[] = [];

  @Output() selected = new EventEmitter();

  constructor(private calendarService:CalendarControlService,
    private appointmentDialog: MatDialog) { 
    this.dateList = this.calendarService.getCalendarDays(this.date);
  }

  ngOnInit(){

    this.calendarService.getDate().subscribe(serviceDate => {
      this.date = serviceDate;
    });
    
    this.calendarService.getDateList().subscribe(serviceDateList => {
      this.dateList = serviceDateList;
    });

    this.calendarService.getAppointmentList().subscribe(appointmentList => {
        this._appointmentList = appointmentList;
    });
  }

  getAppointmentListByDate(date:Date){

    if(this._appointmentList.length){
      return this._appointmentList.filter(apt => 
        apt.date.getFullYear() == date.getFullYear()
      && apt.date.getMonth() == date.getMonth()
      && apt.date.getUTCDate() == date.getUTCDate());
    }

    return [];
  }

  isSameMonth(date:Date) {
    return date.getMonth() === this.date.getMonth();
  }

  openAppointmentDialog(selectedAppointment: appointment){
    
    const appointmentDialogRef = this.appointmentDialog
    .open(AppointmentDialogComponent,{
      data: selectedAppointment      
    });

  }

  drop(event: CdkDragDrop<string[]>) {
    moveItemInArray(this.appointmentsDropListData, event.previousIndex, event.currentIndex);
  }

}
