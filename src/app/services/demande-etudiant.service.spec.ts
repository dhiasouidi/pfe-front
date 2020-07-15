import { TestBed } from '@angular/core/testing';

import { DemandeEtudiantService } from './demande-etudiant.service';

describe('DemandeEtudiantService', () => {
  let service: DemandeEtudiantService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DemandeEtudiantService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
