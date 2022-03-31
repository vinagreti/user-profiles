import { TestBed } from '@angular/core/testing';

import { PassportApiService } from './passport-api.service';

describe('PassportApiService', () => {
  let service: PassportApiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PassportApiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
