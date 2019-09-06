import { TestBed } from '@angular/core/testing';

import { MycomplainService } from './mycomplain.service';

describe('MycomplainService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: MycomplainService = TestBed.get(MycomplainService);
    expect(service).toBeTruthy();
  });
});
