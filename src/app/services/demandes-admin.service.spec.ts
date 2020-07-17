import { TestBed } from '@angular/core/testing';

import { DemandesAdminService } from './demandes-admin.service';

describe('DemandesAdminService', () => {
  let service: DemandesAdminService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DemandesAdminService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
