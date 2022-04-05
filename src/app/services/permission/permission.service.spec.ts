import { TestBed } from '@angular/core/testing';
import { PermissionService } from './permission.service';
import { PermissionServiceTestingModule } from './permission.service.testing.module';

describe('PermissionService', () => {
  let service: PermissionService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [PermissionServiceTestingModule],
    });
    service = TestBed.inject(PermissionService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
