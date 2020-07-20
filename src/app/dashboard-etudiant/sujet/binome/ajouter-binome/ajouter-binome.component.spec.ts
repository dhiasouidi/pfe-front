import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AjouterBinomeComponent } from './ajouter-binome.component';

describe('AjouterBinomeComponent', () => {
  let component: AjouterBinomeComponent;
  let fixture: ComponentFixture<AjouterBinomeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AjouterBinomeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AjouterBinomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
