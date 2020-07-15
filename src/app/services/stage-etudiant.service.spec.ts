import { TestBed } from '@angular/core/testing';

import { StageEtudiantService } from './stage-etudiant.service';

describe('StageEtudiantService', () => {
  let service: StageEtudiantService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(StageEtudiantService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
