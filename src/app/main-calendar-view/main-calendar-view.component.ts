import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CalendarControlService } from '../services/calendar-control.service';

@Component({
  selector: 'app-main-calendar-view',
  templateUrl: './main-calendar-view.component.html',
  styleUrls: ['./main-calendar-view.component.scss']
})
export class MainCalendarViewComponent {

  dateList: Array<Date> = [];
  days = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
  date = new Date();
  
  @Output() selected = new EventEmitter();
  
  constructor(private calendarService:CalendarControlService) { 
    this.dateList = this.calendarService.getCalendarDays(this.date);
  }

  ngOnInit(){
    
    this.calendarService.getDate().subscribe(serviceDate => {
      this.date = serviceDate;
    });

    this.calendarService.getDateList().subscribe(serviceDateList => {
      this.dateList = serviceDateList;
    });

  }

  isSameMonth(date:Date) {
    return date.getMonth() === this.date.getMonth();
  }

}
