import { TestBed } from '@angular/core/testing';

import { LibToConfigureService } from './lib-to-configure.service';

describe('LibToConfigureService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: LibToConfigureService = TestBed.get(LibToConfigureService);
    expect(service).toBeTruthy();
  });
});
