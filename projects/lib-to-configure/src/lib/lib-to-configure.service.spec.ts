import { TestBed } from '@angular/core/testing';

import { LibToConfigureService } from './lib-to-configure.service';

describe('LibToConfigureService', () => {
  let service: LibToConfigureService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LibToConfigureService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
