import { TestBed } from '@angular/core/testing';

import { PiChartService } from './pi-chart.service';

describe('PiChartService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: PiChartService = TestBed.get(PiChartService);
    expect(service).toBeTruthy();
  });
});
