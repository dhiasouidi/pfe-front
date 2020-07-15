import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ConsulterStageComponent } from './consulter-stage.component';

describe('ConsulterStageComponent', () => {
  let component: ConsulterStageComponent;
  let fixture: ComponentFixture<ConsulterStageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ConsulterStageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ConsulterStageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
