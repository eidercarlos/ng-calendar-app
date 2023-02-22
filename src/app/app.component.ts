import { Component, Input } from '@angular/core';
import { CalendarControlService } from './services/calendar-control.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  title = 'ng-calendar-app';
  
  date = new Date();

  constructor(private calendarService: CalendarControlService) {}

  ngOnInit(){

    this.calendarService.getDate().subscribe(date => {
      this.date = date;
    });
    
  }

  setMonth(increment: number){
    this.calendarService.setMonth(increment);
  }
  
}
