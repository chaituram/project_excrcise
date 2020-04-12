import { TestBed } from '@angular/core/testing';

import { ConatctListService } from './conatct-list.service';

describe('ConatctListService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ConatctListService = TestBed.get(ConatctListService);
    expect(service).toBeTruthy();
  });
});
