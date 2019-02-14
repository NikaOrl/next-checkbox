import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NextCheckboxComponent } from './next-checkbox.component';

describe('NextCheckboxComponent', () => {
  let component: NextCheckboxComponent;
  let fixture: ComponentFixture<NextCheckboxComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NextCheckboxComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NextCheckboxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
