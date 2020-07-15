import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AcceuilEtudiantComponent } from './acceuil-etudiant.component';

describe('AcceuilEtudiantComponent', () => {
  let component: AcceuilEtudiantComponent;
  let fixture: ComponentFixture<AcceuilEtudiantComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AcceuilEtudiantComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AcceuilEtudiantComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
