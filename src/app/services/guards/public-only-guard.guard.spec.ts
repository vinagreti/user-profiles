import { TestBed } from '@angular/core/testing';

import { PublicOnlyGuardGuard } from './public-only-guard.guard';

describe('PublicOnlyGuardGuard', () => {
  let guard: PublicOnlyGuardGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(PublicOnlyGuardGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
