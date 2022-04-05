import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { PageWrapperTestingModule } from '@components/app-layout/page-wrapper/page-wrapper.testing.module';
import { PublicOnlyPagesComponent } from './public-only-pages.component';
import { PublicOnlyPagesModule } from './public-only-pages.module';

describe('PublicOnlyPagesComponent', () => {
  let component: PublicOnlyPagesComponent;
  let fixture: ComponentFixture<PublicOnlyPagesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        PublicOnlyPagesModule,
        PageWrapperTestingModule,
        RouterTestingModule,
      ],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PublicOnlyPagesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
