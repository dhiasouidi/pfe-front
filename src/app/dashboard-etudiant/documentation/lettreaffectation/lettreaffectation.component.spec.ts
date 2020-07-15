import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LettreaffectationComponent } from './lettreaffectation.component';

describe('LettreaffectationComponent', () => {
  let component: LettreaffectationComponent;
  let fixture: ComponentFixture<LettreaffectationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LettreaffectationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LettreaffectationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
