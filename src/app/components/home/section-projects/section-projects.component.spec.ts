import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SectionProjectsComponent } from './section-projects.component';

describe('SectionProjectsComponent', () => {
  let component: SectionProjectsComponent;
  let fixture: ComponentFixture<SectionProjectsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SectionProjectsComponent]
    });
    fixture = TestBed.createComponent(SectionProjectsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
