import { TestBed } from '@angular/core/testing';
import { PassportApiService } from './passport-api.service';
import { PassportApiTestingModule } from './passport-api.testing.module';

describe('PassportApiService', () => {
  let service: PassportApiService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [PassportApiTestingModule],
    });
    service = TestBed.inject(PassportApiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
