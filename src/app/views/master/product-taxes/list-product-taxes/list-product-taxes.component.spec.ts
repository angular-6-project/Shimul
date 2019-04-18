import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListProductTaxesComponent } from './list-product-taxes.component';

describe('ListProductTaxesComponent', () => {
  let component: ListProductTaxesComponent;
  let fixture: ComponentFixture<ListProductTaxesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListProductTaxesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListProductTaxesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
