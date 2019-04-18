import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditSalesmanComponent } from './edit-salesman.component';

describe('EditSalesmanComponent', () => {
  let component: EditSalesmanComponent;
  let fixture: ComponentFixture<EditSalesmanComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditSalesmanComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditSalesmanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
