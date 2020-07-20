import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ConsulterListeEnseignantsComponent } from './consulter-liste-enseignants.component';

describe('ConsulterListeEnseignantsComponent', () => {
  let component: ConsulterListeEnseignantsComponent;
  let fixture: ComponentFixture<ConsulterListeEnseignantsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ConsulterListeEnseignantsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ConsulterListeEnseignantsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
