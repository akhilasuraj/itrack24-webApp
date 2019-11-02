import { TestBed } from '@angular/core/testing';

import { AddworkersService } from './addworkers.service';

describe('AddworkersService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: AddworkersService = TestBed.get(AddworkersService);
    expect(service).toBeTruthy();
  });
});
