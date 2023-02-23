import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MonthCalendarViewComponent } from './month-calendar-view.component';

describe('MonthCalendarViewComponent', () => {
  let component: MonthCalendarViewComponent;
  let fixture: ComponentFixture<MonthCalendarViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MonthCalendarViewComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MonthCalendarViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
