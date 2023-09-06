import { TestBed } from '@angular/core/testing';

import { GetMenuItemsService } from './get-menu-items.service';

describe('GetMenuItemsService', () => {
  let service: GetMenuItemsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GetMenuItemsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
