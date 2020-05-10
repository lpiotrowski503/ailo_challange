import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UiPopupComponent } from './ui-popup.component';

describe('UiPopupComponent', () => {
  let component: UiPopupComponent;
  let fixture: ComponentFixture<UiPopupComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UiPopupComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UiPopupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
