import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PrivateOnlyPagesComponent } from './private-only-pages.component';

describe('PrivateOnlyPagesComponent', () => {
  let component: PrivateOnlyPagesComponent;
  let fixture: ComponentFixture<PrivateOnlyPagesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PrivateOnlyPagesComponent ]
    })
    .compileComponents();
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
