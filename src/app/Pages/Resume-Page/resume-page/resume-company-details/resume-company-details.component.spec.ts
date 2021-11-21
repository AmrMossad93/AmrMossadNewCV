import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ResumeCompanyDetailsComponent } from './resume-company-details.component';

describe('ResumeCompanyDetailsComponent', () => {
  let component: ResumeCompanyDetailsComponent;
  let fixture: ComponentFixture<ResumeCompanyDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ResumeCompanyDetailsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ResumeCompanyDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
