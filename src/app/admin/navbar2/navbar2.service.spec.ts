import { TestBed } from '@angular/core/testing';

import { Navbar2Service } from './navbar2.service';

describe('Navbar2Service', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: Navbar2Service = TestBed.get(Navbar2Service);
    expect(service).toBeTruthy();
  });
});
