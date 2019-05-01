import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PipeP1Component } from './pipe-p1.component';

describe('PipeP1Component', () => {
  let component: PipeP1Component;
  let fixture: ComponentFixture<PipeP1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PipeP1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PipeP1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
