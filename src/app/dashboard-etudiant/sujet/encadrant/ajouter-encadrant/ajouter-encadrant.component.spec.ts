import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AjouterEncadrantComponent } from './ajouter-encadrant.component';

describe('AjouterEncadrantComponent', () => {
  let component: AjouterEncadrantComponent;
  let fixture: ComponentFixture<AjouterEncadrantComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AjouterEncadrantComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AjouterEncadrantComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
