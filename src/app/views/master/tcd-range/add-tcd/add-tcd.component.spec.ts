import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddTcdComponent } from './add-tcd.component';

describe('AddTcdComponent', () => {
  let component: AddTcdComponent;
  let fixture: ComponentFixture<AddTcdComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddTcdComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddTcdComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
