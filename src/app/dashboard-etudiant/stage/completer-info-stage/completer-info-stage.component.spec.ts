import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CompleterInfoStageComponent } from './completer-info-stage.component';

describe('CompleterInfoStageComponent', () => {
  let component: CompleterInfoStageComponent;
  let fixture: ComponentFixture<CompleterInfoStageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CompleterInfoStageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CompleterInfoStageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
