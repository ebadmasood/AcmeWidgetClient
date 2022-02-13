import { TestBed } from '@angular/core/testing';

import { ActivityformService } from './activityform.service';

describe('ActivityformService', () => {
  let service: ActivityformService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ActivityformService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
