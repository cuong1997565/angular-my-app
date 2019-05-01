import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SwithcaseComponent } from './swithcase.component';

describe('SwithcaseComponent', () => {
  let component: SwithcaseComponent;
  let fixture: ComponentFixture<SwithcaseComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SwithcaseComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SwithcaseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
