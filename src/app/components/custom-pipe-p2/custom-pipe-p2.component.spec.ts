import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomPipeP2Component } from './custom-pipe-p2.component';

describe('CustomPipeP2Component', () => {
  let component: CustomPipeP2Component;
  let fixture: ComponentFixture<CustomPipeP2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CustomPipeP2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CustomPipeP2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
