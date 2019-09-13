import { TestBed } from '@angular/core/testing';

import { PopPostService } from './pop-post.service';

describe('PopPostService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: PopPostService = TestBed.get(PopPostService);
    expect(service).toBeTruthy();
  });
});
