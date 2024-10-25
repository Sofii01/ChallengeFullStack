import { TestBed } from '@angular/core/testing';

import { CantTotalesService } from '../services/cant-totales.service';

describe('CantTotalesService', () => {
  let service: CantTotalesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CantTotalesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
