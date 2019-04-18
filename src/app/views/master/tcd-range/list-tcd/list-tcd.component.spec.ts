import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListTcdComponent } from './list-tcd.component';

describe('ListTcdComponent', () => {
  let component: ListTcdComponent;
  let fixture: ComponentFixture<ListTcdComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListTcdComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListTcdComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
