import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditPacketComponent } from './edit-packet.component';

describe('EditPacketComponent', () => {
  let component: EditPacketComponent;
  let fixture: ComponentFixture<EditPacketComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditPacketComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditPacketComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
