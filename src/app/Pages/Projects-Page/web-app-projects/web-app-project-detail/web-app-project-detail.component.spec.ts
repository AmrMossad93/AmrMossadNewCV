import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WebAppProjectDetailComponent } from './web-app-project-detail.component';

describe('WebAppProjectDetailComponent', () => {
  let component: WebAppProjectDetailComponent;
  let fixture: ComponentFixture<WebAppProjectDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WebAppProjectDetailComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WebAppProjectDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
