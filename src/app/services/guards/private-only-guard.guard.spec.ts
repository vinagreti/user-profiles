import { TestBed } from '@angular/core/testing';

import { PrivateOnlyGuardGuard } from './private-only-guard.guard';

describe('PrivateOnlyGuardGuard', () => {
  let guard: PrivateOnlyGuardGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(PrivateOnlyGuardGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
