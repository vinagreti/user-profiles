import { TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { AuthServiceTestingModule } from '@services/auth';
import { PrivateOnlyGuardGuard } from './private-only-guard.guard';

describe('PrivateOnlyGuardGuard', () => {
  let guard: PrivateOnlyGuardGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [AuthServiceTestingModule, RouterTestingModule],
    });
    guard = TestBed.inject(PrivateOnlyGuardGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
