import { TestBed } from '@angular/core/testing';

import { ButterySmoothService } from './buttery-smooth.service';

describe('ButterySmoothService', () => {
  let service: ButterySmoothService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ButterySmoothService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
