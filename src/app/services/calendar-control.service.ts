import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { appointment } from '../classes/appointment';

const DAY_MS = 60 * 60 * 24 * 1000;



@Injectable({
  providedIn: 'root'
})
export class CalendarControlService {

  private _dateSubject = new Subject<Date>();
  private _dateListSubject = new Subject<Array<Date>>();
  private _appointmentListSubject = new Subject<appointment[]>();
  private _appointmentList: appointment[] = [];

  date = new Date();

  addAppointment(newAppointment:appointment){
    this._appointmentList.push(newAppointment);
    this.updateAppointmentList();
  }

  removeAppointment(appointmentId:number){
      const idFromList = this._appointmentList.findIndex(item => item.id == appointmentId);
      if(idFromList > -1){
        this._appointmentList.splice(idFromList, 1);
        this.updateAppointmentList();
      }  
  }

  private updateAppointmentList(){
    this._appointmentListSubject.next(this._appointmentList);
  }

  getAppointmentList(){
    return this._appointmentListSubject.asObservable();
  }

  getAppointmentListByDate(date: Date){   

    let appointmentList: appointment[] = [];

    if(this._appointmentList.length){

      this._appointmentList.forEach(appt => {
          if(appt.date.getFullYear() === date.getFullYear()
          && appt.date.getMonth() === date.getMonth()
          && appt.date.getDay() === date.getDay()){
            appointmentList.push(appt);
          }
      });
    }

    return appointmentList;
  }

  setDate(date: Date){
    this.date = date;
    this._dateSubject.next(date);    
  }

  setDateList(dates: Array<Date>){
    this._dateListSubject.next(dates);    
  }

  getDate(){
    return this._dateSubject.asObservable();
  }

  getDateList(){
    return this._dateListSubject.asObservable();
  }

  setMonth(increment:number) {
    const [year, month] = [this.date.getFullYear(), this.date.getMonth()];
    this.setDate(new Date(year, month + increment, 1));
    this.setDateList(this.getCalendarDays(this.date));
  }

  public getCalendarDays(date = new Date()) {
    const calendarStartTime = this.getCalendarStartDay(date).getTime();

    return this.range(0, 41)
      .map(num => new Date(calendarStartTime + DAY_MS * num));
  }

  private getCalendarStartDay(date = new Date()) {
    const [year, month] = [date.getFullYear(), date.getMonth()];
    const firstDayOfMonth = new Date(year, month, 1).getTime();

    const arrayOfDays = this.range(1, 7)
      .map(num => new Date(firstDayOfMonth - DAY_MS * num))

    const idxArrayOfDays = arrayOfDays.findIndex(dt => dt.getDay() === 0);
    
    return arrayOfDays[idxArrayOfDays];
  }  

  private range(start: number, end: number, length = end - start + 1) {
    return Array.from({ length }, (_, i) => start + i)
  }  

  /*
  getAllDays(date = new Date()) {
    const calStartTime =  this.getCalendarStartDay(date).getTime();
    return this.range(0, 41)
      .map(num => new Date(calStartTime + DAY_MS * num));
  } 
  */ 

}
