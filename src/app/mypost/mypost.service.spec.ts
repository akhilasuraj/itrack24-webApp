import { TestBed } from '@angular/core/testing';

import { MypostService } from './mypost.service';

describe('MypostService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: MypostService = TestBed.get(MypostService);
    expect(service).toBeTruthy();
  });
});
