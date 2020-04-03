import { TestBed } from '@angular/core/testing';

import { DataMakeService } from './data-make.service';

describe('DataService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: DataMakeService = TestBed.get(DataMakeService);
    expect(service).toBeTruthy();
  });
});
