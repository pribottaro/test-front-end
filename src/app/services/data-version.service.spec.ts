import { TestBed } from '@angular/core/testing';

import { DataVersionService } from './data-version.service';

describe('DataVersionService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: DataVersionService = TestBed.get(DataVersionService);
    expect(service).toBeTruthy();
  });
});
