import { TestBed } from '@angular/core/testing';

import { GetSoupsService } from './get-soups.service';

describe('GetSoupsService', () => {
  let service: GetSoupsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GetSoupsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
