import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ConsulterProfileComponent } from './consulter-profile.component';

describe('ConsulterProfileComponent', () => {
  let component: ConsulterProfileComponent;
  let fixture: ComponentFixture<ConsulterProfileComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ConsulterProfileComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ConsulterProfileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
