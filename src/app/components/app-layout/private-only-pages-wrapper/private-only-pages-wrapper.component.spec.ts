import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PrivateOnlyPagesWrapperComponent } from './private-only-pages-wrapper.component';

describe('PrivateOnlyPagesWrapperComponent', () => {
  let component: PrivateOnlyPagesWrapperComponent;
  let fixture: ComponentFixture<PrivateOnlyPagesWrapperComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PrivateOnlyPagesWrapperComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PrivateOnlyPagesWrapperComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
