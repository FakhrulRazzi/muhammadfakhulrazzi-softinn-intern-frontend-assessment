import { TestBed } from '@angular/core/testing';

import { Bmi } from './bmi';

describe('Bmi', () => {
  let service: Bmi;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Bmi);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
