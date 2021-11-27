import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MobileAppProjectDetailComponent } from './mobile-app-project-detail.component';

describe('MobileAppProjectDetailComponent', () => {
  let component: MobileAppProjectDetailComponent;
  let fixture: ComponentFixture<MobileAppProjectDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MobileAppProjectDetailComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MobileAppProjectDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
