import { TestBed } from '@angular/core/testing';

import { PermisisonService } from './permisison.service';

describe('PermisisonService', () => {
  let service: PermisisonService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PermisisonService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
