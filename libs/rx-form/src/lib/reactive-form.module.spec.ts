import { async, TestBed } from '@angular/core/testing';
import { RxFormModule } from './rx-form.module';

describe('ReactiveFormModule', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [RxFormModule]
    }).compileComponents();
  }));

  it('should create', () => {
    expect(RxFormModule).toBeDefined();
  });
});
