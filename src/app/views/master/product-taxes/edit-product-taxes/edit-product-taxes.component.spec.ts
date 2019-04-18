import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditProductTaxesComponent } from './edit-product-taxes.component';

describe('EditProductTaxesComponent', () => {
  let component: EditProductTaxesComponent;
  let fixture: ComponentFixture<EditProductTaxesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditProductTaxesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditProductTaxesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
