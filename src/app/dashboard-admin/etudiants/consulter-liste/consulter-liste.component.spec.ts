import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ConsulterListeComponent } from './consulter-liste.component';

describe('ConsulterListeComponent', () => {
  let component: ConsulterListeComponent;
  let fixture: ComponentFixture<ConsulterListeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ConsulterListeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ConsulterListeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
