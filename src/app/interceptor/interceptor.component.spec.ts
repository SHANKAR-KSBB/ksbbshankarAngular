import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InterceptorComponent } from './interceptor.component';

describe('InterceptorComponent', () => {
  let component: InterceptorComponent;
  let fixture: ComponentFixture<InterceptorComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [InterceptorComponent]
    });
    fixture = TestBed.createComponent(InterceptorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
