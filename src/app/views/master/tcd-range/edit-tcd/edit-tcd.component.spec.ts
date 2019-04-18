import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditTcdComponent } from './edit-tcd.component';

describe('EditTcdComponent', () => {
  let component: EditTcdComponent;
  let fixture: ComponentFixture<EditTcdComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditTcdComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditTcdComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
