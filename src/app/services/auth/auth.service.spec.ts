import { TestBed } from '@angular/core/testing';
import { AuthService } from './auth.service';
import { AuthServiceTestingModule } from './auth.service.testing.module';

describe('AuthService', () => {
  let service: AuthService;

  beforeEach(() => {
    TestBed.configureTestingModule({ imports: [AuthServiceTestingModule] });
    service = TestBed.inject(AuthService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
