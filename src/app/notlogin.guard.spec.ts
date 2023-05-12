import { TestBed } from '@angular/core/testing';

import { NotloginGuard } from './notlogin.guard';

describe('NotloginGuard', () => {
  let guard: NotloginGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(NotloginGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
