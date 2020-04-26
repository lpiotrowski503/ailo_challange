import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UiFlexRowComponent } from './ui-flex-row.component';

describe('UiFlexRowComponent', () => {
  let component: UiFlexRowComponent;
  let fixture: ComponentFixture<UiFlexRowComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UiFlexRowComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UiFlexRowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
