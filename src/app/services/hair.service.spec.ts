/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { HairService } from './hair.service';

describe('HairService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [HairService]
    });
  });

  it('should ...', inject([HairService], (service: HairService) => {
    expect(service).toBeTruthy();
  }));
});
