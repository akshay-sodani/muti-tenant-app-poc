import { TestBed } from '@angular/core/testing';

import { MyFormLibService } from './my-form-lib.service';

describe('MyFormLibService', () => {
  let service: MyFormLibService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MyFormLibService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
