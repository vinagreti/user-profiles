import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PublicOnlyPagesComponent } from './public-only-pages.component';

describe('PublicOnlyPagesComponent', () => {
  let component: PublicOnlyPagesComponent;
  let fixture: ComponentFixture<PublicOnlyPagesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PublicOnlyPagesComponent ]
    })
    .compileComponents();
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
