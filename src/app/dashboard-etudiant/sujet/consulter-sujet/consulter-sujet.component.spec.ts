import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ConsulterSujetComponent } from './consulter-sujet.component';

describe('ConsulterSujetComponent', () => {
  let component: ConsulterSujetComponent;
  let fixture: ComponentFixture<ConsulterSujetComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ConsulterSujetComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ConsulterSujetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
