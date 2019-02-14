import { TestBed } from '@angular/core/testing';

import { NextCheckboxService } from './next-checkbox.service';

describe('NextCheckboxService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: NextCheckboxService = TestBed.get(NextCheckboxService);
    expect(service).toBeTruthy();
  });
});
