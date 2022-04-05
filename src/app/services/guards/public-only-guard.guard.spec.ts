import { TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { AuthServiceTestingModule } from '@services/auth';
import { PublicOnlyGuardGuard } from './public-only-guard.guard';

describe('PublicOnlyGuardGuard', () => {
  let guard: PublicOnlyGuardGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [AuthServiceTestingModule, RouterTestingModule],
    });
    guard = TestBed.inject(PublicOnlyGuardGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
