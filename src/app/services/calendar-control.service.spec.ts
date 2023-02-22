import { TestBed } from '@angular/core/testing';

import { CalendarControlService } from './calendar-control.service';

describe('CalendarControlService', () => {
  let service: CalendarControlService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CalendarControlService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
