import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PublicOnlyPagesWrapperComponent } from './public-only-pages-wrapper.component';

describe('PublicOnlyPagesWrapperComponent', () => {
  let component: PublicOnlyPagesWrapperComponent;
  let fixture: ComponentFixture<PublicOnlyPagesWrapperComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PublicOnlyPagesWrapperComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PublicOnlyPagesWrapperComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
