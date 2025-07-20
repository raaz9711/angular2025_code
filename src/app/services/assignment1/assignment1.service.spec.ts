import { TestBed } from '@angular/core/testing';

import { Assignment1Service } from './assignment1.service';

describe('Assignment1Service', () => {
  let service: Assignment1Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Assignment1Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
