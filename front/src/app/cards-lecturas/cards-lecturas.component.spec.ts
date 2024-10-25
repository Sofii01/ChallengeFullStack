import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardsLecturasComponent } from './cards-lecturas.component';

describe('CardsLecturasComponent', () => {
  let component: CardsLecturasComponent;
  let fixture: ComponentFixture<CardsLecturasComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CardsLecturasComponent]
    });
    fixture = TestBed.createComponent(CardsLecturasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
