import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddProductTaxesComponent } from './add-product-taxes.component';

describe('AddProductTaxesComponent', () => {
  let component: AddProductTaxesComponent;
  let fixture: ComponentFixture<AddProductTaxesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddProductTaxesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddProductTaxesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
