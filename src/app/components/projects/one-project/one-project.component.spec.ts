import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OneProjectComponent } from './one-project.component';

describe('OneProjectComponent', () => {
  let component: OneProjectComponent;
  let fixture: ComponentFixture<OneProjectComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [OneProjectComponent]
    });
    fixture = TestBed.createComponent(OneProjectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
