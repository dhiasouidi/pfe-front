import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ConsulterListeStagesComponent } from './consulter-liste-stages.component';

describe('ConsulterListeStagesComponent', () => {
  let component: ConsulterListeStagesComponent;
  let fixture: ComponentFixture<ConsulterListeStagesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ConsulterListeStagesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ConsulterListeStagesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
