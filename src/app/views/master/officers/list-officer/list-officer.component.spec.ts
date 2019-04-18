import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListOfficerComponent } from './list-officer.component';

describe('ListOfficerComponent', () => {
  let component: ListOfficerComponent;
  let fixture: ComponentFixture<ListOfficerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListOfficerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListOfficerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
