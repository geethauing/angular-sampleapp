import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NgonchangePropBindComponent } from './ngonchange-prop-bind.component';

describe('NgonchangePropBindComponent', () => {
  let component: NgonchangePropBindComponent;
  let fixture: ComponentFixture<NgonchangePropBindComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NgonchangePropBindComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NgonchangePropBindComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
