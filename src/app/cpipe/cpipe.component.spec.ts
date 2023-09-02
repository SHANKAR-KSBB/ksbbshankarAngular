import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CPipeComponent } from './cpipe.component';

describe('CPipeComponent', () => {
  let component: CPipeComponent;
  let fixture: ComponentFixture<CPipeComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CPipeComponent]
    });
    fixture = TestBed.createComponent(CPipeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
