import { TestBed } from '@angular/core/testing';

import { RuteService } from './rute.service';

describe('RuteService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: RuteService = TestBed.get(RuteService);
    expect(service).toBeTruthy();
  });
});
