import { Component, EventEmitter, Input, Output } from '@angular/core';
import { appointment } from '../classes/appointment';
import { CalendarControlService } from '../services/calendar-control.service';
import {CdkDragDrop, moveItemInArray} from '@angular/cdk/drag-drop';


interface AppointmentByDayOfMonth {
  [key: string]: any;
}

@Component({
  selector: 'app-main-calendar-view',
  templateUrl: './main-calendar-view.component.html',
  styleUrls: ['./main-calendar-view.component.scss']
})
export class MainCalendarViewComponent {

  dateList: Array<Date> = [];
  days = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
  date = new Date();

  private _appointmentList: appointment[] = [];
  private _appointmentListByDayOfMonth: AppointmentByDayOfMonth[] = [];

  @Output() selected = new EventEmitter();

  constructor(private calendarService:CalendarControlService) { 
    this.dateList = this.calendarService.getCalendarDays(this.date);
  }

  ngOnInit(){

    let appointmentTest = new appointment();
    appointmentTest.date = new Date();
    appointmentTest.title = "TESTE";
    
    this.calendarService.getDate().subscribe(serviceDate => {
      this.date = serviceDate;
    });
    
    this.calendarService.getDateList().subscribe(serviceDateList => {
      this.dateList = serviceDateList;
      // this.fillAppointmentListByDayOfMonth(this.dateList);
    });

    this.calendarService.getAppointmentList().subscribe(appointmentList => {
        this._appointmentList = appointmentList;
    });

  }

  /*
  fillAppointmentListByDayOfMonth(dateList: Date[]){
      this._appointmentListByDayOfMonth = [];
      dateList.forEach(date => {
          if(this.isSameMonth(date)){
            const currentAppointment = this._appointmentList.find(apt => 
              apt.date.getFullYear() === date.getFullYear()
              && apt.date.getMonth() === date.getMonth()
              && apt.date.getDay() === date.getDay())

            if(currentAppointment){
              this._appointmentListByDayOfMonth[date.getDay()] = currentAppointment;
            }
          }
      });
  } 
  */

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

  // isSameYear(date:Date){
  //   return date.getFullYear() === this.date.getFullYear();
  // }

  // isSameDay(date:Date){
  //   return date.getDay() === this.date.getDay();
  // }

  // drop(event: CdkDragDrop<appointment[]>) {
  //   moveItemInArray(this.vegetables, event.previousIndex, event.currentIndex);
  // }

}
