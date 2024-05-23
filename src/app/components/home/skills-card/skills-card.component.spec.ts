import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SkillsCardComponent } from './skills-card.component';

describe('SkillsCardComponent', () => {
  let component: SkillsCardComponent;
  let fixture: ComponentFixture<SkillsCardComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SkillsCardComponent]
    });
    fixture = TestBed.createComponent(SkillsCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
