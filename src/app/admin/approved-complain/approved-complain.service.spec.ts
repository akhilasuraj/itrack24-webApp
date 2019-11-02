import { TestBed } from '@angular/core/testing';

import { ApprovedComplainService } from './approved-complain.service';

describe('ApprovedComplainService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ApprovedComplainService = TestBed.get(ApprovedComplainService);
    expect(service).toBeTruthy();
  });
});
