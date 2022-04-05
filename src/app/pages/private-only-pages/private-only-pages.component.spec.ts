import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { PageWrapperModule } from '@components/app-layout';
import { AuthServiceTestingModule } from '@services/auth';
import { PrivateOnlyPagesComponent } from './private-only-pages.component';
import { PrivateOnlyPagesModule } from './private-only-pages.module';

describe('PrivateOnlyPagesComponent', () => {
  let component: PrivateOnlyPagesComponent;
  let fixture: ComponentFixture<PrivateOnlyPagesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        PrivateOnlyPagesModule,
        AuthServiceTestingModule,
        PageWrapperModule,
        RouterTestingModule,
      ],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PrivateOnlyPagesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
