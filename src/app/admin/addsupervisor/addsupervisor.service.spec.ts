import { TestBed } from '@angular/core/testing';

import { AddsupervisorService } from './addsupervisor.service';

describe('AddsupervisorService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: AddsupervisorService = TestBed.get(AddsupervisorService);
    expect(service).toBeTruthy();
  });
});
