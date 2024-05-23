import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FiltroCardComponent } from './filtro-card.component';

describe('FiltroCardComponent', () => {
  let component: FiltroCardComponent;
  let fixture: ComponentFixture<FiltroCardComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FiltroCardComponent]
    });
    fixture = TestBed.createComponent(FiltroCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
