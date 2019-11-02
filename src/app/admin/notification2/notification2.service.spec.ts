import { TestBed } from '@angular/core/testing';

import { Notification2Service } from './notification2.service';

describe('Notification2Service', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: Notification2Service = TestBed.get(Notification2Service);
    expect(service).toBeTruthy();
  });
});
