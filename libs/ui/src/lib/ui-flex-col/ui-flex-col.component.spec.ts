import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UiFlexColComponent } from './ui-flex-col.component';

describe('UiFlexColComponent', () => {
  let component: UiFlexColComponent;
  let fixture: ComponentFixture<UiFlexColComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UiFlexColComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UiFlexColComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
