import { DatePipe } from '@angular/common';
import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { appointment } from '../classes/appointment';
import { CalendarControlService } from '../services/calendar-control.service';

@Component({
  selector: 'app-appointment-dialog',
  templateUrl: './appointment-dialog.component.html',
  styleUrls: ['./appointment-dialog.component.scss']
})
export class AppointmentDialogComponent {

    currentAppointment: appointment; 
    editMode: boolean = false;   

    constructor(@Inject(MAT_DIALOG_DATA) public data: appointment,
      private calendarService: CalendarControlService) {
        if(this.data){
          this.currentAppointment = this.data;
          this.editMode = true;
        } else {
          this.currentAppointment = new appointment();
          this.editMode = false;
        }
    }

    get getAvailableTimeToBegin(){
      const currentTime = new Date();
      const endOfDay = new Date();
      endOfDay.setHours(23, 59, 59, 999); 
      currentTime.setHours(0, 0, 0, 0); 
      
      const interval = 15; 
      const availableTimes = [];
      
      let nextTime = new Date(Math.ceil(currentTime.getTime() / (interval * 60 * 1000)) * (interval * 60 * 1000)); 
      while (nextTime <= endOfDay) {
        availableTimes.push(nextTime.toLocaleTimeString([], {hour: '2-digit', minute:'2-digit', hour12: false})); 
        nextTime.setTime(nextTime.getTime() + interval * 60 * 1000); 
      }

      //To Format the available times:
      // const availableDates = availableTimes.map(time => new Date(Date.parse(`01/01/1970 ${time} UTC`)));
      
      return availableTimes;
    }

    get getAvailableTimeToEnd(){

      const currentTime = new Date();
      const endOfDay = new Date();
      endOfDay.setHours(23, 59, 59, 999);
      currentTime.setHours(0, 0, 0, 0); 

      const interval = 15; 
      const intervalToJump = 30; 
      const availableTimes = [];

      let nextTime = new Date(Math.ceil(currentTime.getTime() / (intervalToJump * 60 * 1000)) * (intervalToJump * 60 * 1000)); 
      while (nextTime <= endOfDay) {
        availableTimes.push(nextTime.toLocaleTimeString([], {hour: '2-digit', minute:'2-digit', hour12: false})); 
        nextTime.setTime(nextTime.getTime() + interval * 60 * 1000); 
      }
      
      return availableTimes;      
    }
    
    createAppointment(apt: appointment){
      this.calendarService.addAppointment(apt);
    }

    saveAppointment(apt: appointment){
      this.calendarService.saveAppointment(apt)
    }

    deleteAppointment(id: number){
      this.calendarService.removeAppointment(id);      
    }
}
