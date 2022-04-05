import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { UserServiceTestingModule } from '@services/user';
import { UserAddPageComponent } from './user-add-page.component';
import { UserAddPageModule } from './user-add-page.module';

describe('UserAddPageComponent', () => {
  let component: UserAddPageComponent;
  let fixture: ComponentFixture<UserAddPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        UserAddPageModule,
        UserServiceTestingModule,
        RouterTestingModule,
      ],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UserAddPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
