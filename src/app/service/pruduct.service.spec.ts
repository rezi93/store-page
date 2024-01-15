import { TestBed } from '@angular/core/testing';

import { PruductService } from './pruduct.service';

describe('PruductService', () => {
  let service: PruductService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PruductService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
