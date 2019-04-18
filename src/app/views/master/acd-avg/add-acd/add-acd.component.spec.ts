import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddAcdComponent } from './add-acd.component';

describe('AddAcdComponent', () => {
  let component: AddAcdComponent;
  let fixture: ComponentFixture<AddAcdComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddAcdComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddAcdComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
