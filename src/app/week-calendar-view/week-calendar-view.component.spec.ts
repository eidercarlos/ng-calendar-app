import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WeekCalendarViewComponent } from './week-calendar-view.component';

describe('WeekCalendarViewComponent', () => {
  let component: WeekCalendarViewComponent;
  let fixture: ComponentFixture<WeekCalendarViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WeekCalendarViewComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WeekCalendarViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
