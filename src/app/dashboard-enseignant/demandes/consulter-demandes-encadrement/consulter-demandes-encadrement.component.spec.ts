import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ConsulterDemandesEncadrementComponent } from './consulter-demandes-encadrement.component';

describe('ConsulterDemandesEncadrementComponent', () => {
  let component: ConsulterDemandesEncadrementComponent;
  let fixture: ComponentFixture<ConsulterDemandesEncadrementComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ConsulterDemandesEncadrementComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ConsulterDemandesEncadrementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
