import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ConsulterListeSujetsComponent } from './consulter-liste-sujets.component';

describe('ConsulterListeSujetsComponent', () => {
  let component: ConsulterListeSujetsComponent;
  let fixture: ComponentFixture<ConsulterListeSujetsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ConsulterListeSujetsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ConsulterListeSujetsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
