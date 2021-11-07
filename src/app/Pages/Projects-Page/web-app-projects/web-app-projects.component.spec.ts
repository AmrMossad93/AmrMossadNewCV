import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WebAppProjectsComponent } from './web-app-projects.component';

describe('WebAppProjectsComponent', () => {
  let component: WebAppProjectsComponent;
  let fixture: ComponentFixture<WebAppProjectsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WebAppProjectsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WebAppProjectsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
