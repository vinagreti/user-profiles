import { TestBed } from '@angular/core/testing';
import { UserService } from './user.service';
import { UserServiceTestingModule } from './user.service.testing.module';

describe('UserService', () => {
  let service: UserService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [UserServiceTestingModule],
    });
    service = TestBed.inject(UserService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
