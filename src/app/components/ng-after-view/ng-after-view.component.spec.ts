import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NgAfterViewComponent } from './ng-after-view.component';

describe('NgAfterViewComponent', () => {
  let component: NgAfterViewComponent;
  let fixture: ComponentFixture<NgAfterViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NgAfterViewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NgAfterViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
