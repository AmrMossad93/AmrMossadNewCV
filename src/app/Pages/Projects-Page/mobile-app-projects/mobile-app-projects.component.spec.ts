import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MobileAppProjectsComponent } from './mobile-app-projects.component';

describe('MobileAppProjectsComponent', () => {
  let component: MobileAppProjectsComponent;
  let fixture: ComponentFixture<MobileAppProjectsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MobileAppProjectsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MobileAppProjectsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
