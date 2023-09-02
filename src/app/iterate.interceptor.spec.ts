import { TestBed } from '@angular/core/testing';

import { IterateInterceptor } from './iterate.interceptor';

describe('IterateInterceptor', () => {
  beforeEach(() => TestBed.configureTestingModule({
    providers: [
      IterateInterceptor
      ]
  }));

  it('should be created', () => {
    const interceptor: IterateInterceptor = TestBed.inject(IterateInterceptor);
    expect(interceptor).toBeTruthy();
  });
});
