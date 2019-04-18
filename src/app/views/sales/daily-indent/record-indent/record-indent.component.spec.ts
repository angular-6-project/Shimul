import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RecordIndentComponent } from './record-indent.component';

describe('RecordIndentComponent', () => {
  let component: RecordIndentComponent;
  let fixture: ComponentFixture<RecordIndentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RecordIndentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RecordIndentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
