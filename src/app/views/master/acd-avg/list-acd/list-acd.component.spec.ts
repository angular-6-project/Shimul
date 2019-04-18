import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListAcdComponent } from './list-acd.component';

describe('ListAcdComponent', () => {
  let component: ListAcdComponent;
  let fixture: ComponentFixture<ListAcdComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListAcdComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListAcdComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
