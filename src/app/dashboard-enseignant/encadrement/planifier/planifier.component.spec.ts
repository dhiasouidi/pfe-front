import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PlanifierComponent } from './planifier.component';

describe('PlanifierComponent', () => {
  let component: PlanifierComponent;
  let fixture: ComponentFixture<PlanifierComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PlanifierComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PlanifierComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
