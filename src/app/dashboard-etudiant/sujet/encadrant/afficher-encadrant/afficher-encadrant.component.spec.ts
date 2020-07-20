import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AfficherEncadrantComponent } from './afficher-encadrant.component';

describe('AfficherEncadrantComponent', () => {
  let component: AfficherEncadrantComponent;
  let fixture: ComponentFixture<AfficherEncadrantComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AfficherEncadrantComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AfficherEncadrantComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
