import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SectionPresentationComponent } from './section-presentation.component';

describe('SectionPresentationComponent', () => {
  let component: SectionPresentationComponent;
  let fixture: ComponentFixture<SectionPresentationComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SectionPresentationComponent]
    });
    fixture = TestBed.createComponent(SectionPresentationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
