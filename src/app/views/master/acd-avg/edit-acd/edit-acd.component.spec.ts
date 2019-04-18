import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditAcdComponent } from './edit-acd.component';

describe('EditAcdComponent', () => {
  let component: EditAcdComponent;
  let fixture: ComponentFixture<EditAcdComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditAcdComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditAcdComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
