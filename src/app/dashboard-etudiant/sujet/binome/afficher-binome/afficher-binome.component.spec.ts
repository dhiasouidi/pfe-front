import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AfficherBinomeComponent } from './afficher-binome.component';

describe('AfficherBinomeComponent', () => {
  let component: AfficherBinomeComponent;
  let fixture: ComponentFixture<AfficherBinomeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AfficherBinomeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AfficherBinomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
