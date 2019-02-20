import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { NextCheckboxComponent } from './next-checkbox.component';
import { By } from '@angular/platform-browser';
import { Component } from '@angular/core';

@Component({
  template: `
    <div class="container">
      <next-checkbox
        [disabled]="disabled"
        [required]="required"
        [tabIndex]="tabIndex"
        [id]="id"
      >
        <span>Dog (426)</span>
      </next-checkbox>
      <input type="submit" />
    </div>
  `
})
class HostComponent {
  disabled: boolean;
  required: boolean;
  tabIndex: number;
  id: string;
}

describe('NextCheckboxComponent', () => {
  let component: NextCheckboxComponent;
  let fixture: ComponentFixture<NextCheckboxComponent>;
  let hostFixture: ComponentFixture<HostComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [NextCheckboxComponent, HostComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    hostFixture = TestBed.createComponent(HostComponent);
    fixture = TestBed.createComponent(NextCheckboxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
