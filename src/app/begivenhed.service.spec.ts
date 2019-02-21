import { TestBed } from '@angular/core/testing';

import { BegivenhedService } from './begivenhed.service';

describe('BegivenhedService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: BegivenhedService = TestBed.get(BegivenhedService);
    expect(service).toBeTruthy();
  });
});
