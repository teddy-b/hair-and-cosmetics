/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { ManicureService } from './manicure.service';

describe('ManicureService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ManicureService]
    });
  });

  it('should ...', inject([ManicureService], (service: ManicureService) => {
    expect(service).toBeTruthy();
  }));
});
