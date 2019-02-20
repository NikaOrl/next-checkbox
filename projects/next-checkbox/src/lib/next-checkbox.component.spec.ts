import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { NextCheckboxComponent } from './next-checkbox.component';
import { By } from '@angular/platform-browser';
import { Component } from '@angular/core';
import {
  FormControl,
  FormsModule,
  NgModel,
  ReactiveFormsModule
} from '@angular/forms';

@Component({
  template: `
    <next-checkbox
      [disabled]="disabled"
      [required]="required"
      [tabIndex]="tabIndex"
      [id]="id"
      [(ngModel)]="isChecked"
    ></next-checkbox>
  `
})
class HostNgModelComponent {
  disabled: boolean;
  required: boolean;
  tabIndex: number;
  id: string;
  isChecked = true;
}

@Component({
  template: `
    <next-checkbox
      [disabled]="disabled"
      [required]="required"
      [tabIndex]="tabIndex"
      [id]="id"
      [formControl]="formControl"
    ></next-checkbox>
  `
})
class HostReactiveFormsComponent {
  disabled: boolean;
  required: boolean;
  tabIndex: number;
  id: string;
  formControl = new FormControl();
}

describe('NextCheckboxComponent', () => {
  let component: NextCheckboxComponent;
  let fixture: ComponentFixture<NextCheckboxComponent>;
  let hostNgModelComponentFixture: ComponentFixture<HostNgModelComponent>;
  let hostReactiveFormsComponentFixture: ComponentFixture<
    HostReactiveFormsComponent
  >;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        NextCheckboxComponent,
        HostNgModelComponent,
        HostReactiveFormsComponent
      ]
    }).compileComponents();
  }));

  beforeEach(() => {
    hostNgModelComponentFixture = TestBed.createComponent(HostNgModelComponent);
    hostReactiveFormsComponentFixture = TestBed.createComponent(
      HostReactiveFormsComponent
    );
    fixture = TestBed.createComponent(NextCheckboxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  // disabled when disabled true
  // required when required true
  // disabled when disabled false
  // required when required false
  // tabIndex equels tabIndex that was set
  // id in case of setting
  // id in case of generating
  // NgModel form -> controlValueAccessorChangeFn and the component work
  // ReactiveForms -> controlValueAccessorChangeFn and the component work
  // clicked when clicked
  // not clicked when double clicked
  /*it('should click change value', () => {
    expect(input.checked).toBeFalsy(); // default state

    input.click();
    fixture.detectChanges();

    expect(input.checked).toBeTruthy(); // state after click
});*/
  /*it('should be checked when clicked', fakeAsync(() => {
    let fixture = TestBed.createComponent(TestComponent);
    let component = fixture.componentInstance;
    fixture.detectChanges(); // initialize controls
    tick(); // wait registration controls

    let inputEl = fixture.debugElement.query(By.css("input")).nativeElement;
    inputEl.click();
    fixture.detectChanges();
    expect(component.isChecked).toBe(true);
  }));*/
  /*it('check if checkbox checked attribute changed from default false to true', async() => {
  const input = fixture.debugElement.query(By.css('.className')).nativeElement;
  expect(component.testing).toBe(false);
  component.testing = true;
  fixture.detectChanges();
  expect(input.checked).toBe(true);
});*/
});
