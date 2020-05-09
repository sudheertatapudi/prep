import { TestBed } from '@angular/core/testing';

import { TrianserviceService } from './trianservice.service';

describe('TrianserviceService', () => {
  let service: TrianserviceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TrianserviceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
