import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PermissionServiceTestingModule } from '@services/permission';
import { UserServiceTestingModule } from '@services/user';
import { UserDashboardPageComponent } from './user-dashboard-page.component';
import { UserDashboardPageModule } from './user-dashboard-page.module';

describe('UserDashboardPageComponent', () => {
  let component: UserDashboardPageComponent;
  let fixture: ComponentFixture<UserDashboardPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        UserDashboardPageModule,
        UserServiceTestingModule,
        PermissionServiceTestingModule,
      ],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UserDashboardPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
