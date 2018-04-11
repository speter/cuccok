import { TestBed, inject } from '@angular/core/testing';

import { CuccService } from './cucc.service';

describe('CuccService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CuccService]
    });
  });

  it('should be created', inject([CuccService], (service: CuccService) => {
    expect(service).toBeTruthy();
  }));
});
