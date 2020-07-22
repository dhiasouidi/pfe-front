import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ConsulterListeReclamationsComponent } from './consulter-liste-reclamations.component';

describe('ConsulterListeReclamationsComponent', () => {
  let component: ConsulterListeReclamationsComponent;
  let fixture: ComponentFixture<ConsulterListeReclamationsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ConsulterListeReclamationsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ConsulterListeReclamationsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
