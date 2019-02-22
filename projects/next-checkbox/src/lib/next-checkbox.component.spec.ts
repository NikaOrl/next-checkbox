import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { NextCheckboxComponent } from './next-checkbox.component';
import { By } from '@angular/platform-browser';
import { Component, DebugElement } from '@angular/core';
import {
  FormControl,
  FormsModule,
  NgModel,
  ReactiveFormsModule,
  FormGroup,
  Validators
} from '@angular/forms';

@Component({
  template: `
    <form class="ng-model-form" (ngSubmit)="onSubmit()">
      <div class="container">
        <next-checkbox
          [disabled]="disabled"
          [required]="required"
          [tabIndex]="tabIndex"
          [id]="id"
          [(ngModel)]="isChecked"
          name="checkbox"
        ></next-checkbox>
        <label for="checkbox-1">Some text</label>
      </div>
      <input type="submit" class="submit-input" />
    </form>
  `
})
class CheckboxWithNgModelComponent {
  disabled: boolean;
  required: boolean;
  tabIndex: number;
  id: string;
  isChecked = true;

  onSubmit() {}
}

@Component({
  template: `
    <form [formGroup]="appFormGroup" class="reactive-form">
      <div class="container">
        <next-checkbox
          [disabled]="disabled"
          [required]="required"
          [tabIndex]="tabIndex"
          [id]="id"
          formControlName="checkboxFormControl"
        ></next-checkbox>
        <label for="checkbox-1">Some text</label>
      </div>
      <input type="submit" class="submit-input" />
    </form>
  `
})
class CheckboxWithReactiveFormsComponent {
  disabled: boolean;
  required: boolean;
  tabIndex: number;
  id: string;
  appFormGroup = new FormGroup({
    checkboxFormControl: new FormControl({ checked: true }, Validators.required)
  });

  formValid = false;
}

describe('NextCheckboxComponent', () => {
  let component: NextCheckboxComponent;
  let fixture: ComponentFixture<NextCheckboxComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [NextCheckboxComponent]
    }).compileComponents();
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

describe('NextCheckboxComponent with ngModel', () => {
  let ngModel: NgModel;
  let checkboxDebugElement: DebugElement;
  let component: CheckboxWithNgModelComponent;
  let fixture: ComponentFixture<CheckboxWithNgModelComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [FormsModule],
      declarations: [NextCheckboxComponent, CheckboxWithNgModelComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CheckboxWithNgModelComponent);
    fixture.detectChanges();
    component = fixture.componentInstance;
    checkboxDebugElement = fixture.debugElement.query(
      By.directive(NextCheckboxComponent)
    );
    ngModel = checkboxDebugElement.injector.get<NgModel>(NgModel);
  });

  it('should be pristine, untouched, and valid initially', () => {
    expect(ngModel.valid).toBe(true);
    expect(ngModel.pristine).toBe(true);
    expect(ngModel.touched).toBe(false);
  });

  it('should be disabled when disabled=false', async(() => {
    component.disabled = false;

    fixture.detectChanges();
    fixture.whenStable().then(() => {
      fixture.detectChanges();
      const de = fixture.debugElement.query(By.css('.next-checkbox__input'));
      expect(de.nativeElement.disabled).toBe(false);
    });
  }));

  it('should be enabled when disabled=true', async(() => {
    component.disabled = true;

    fixture.detectChanges();
    fixture.whenStable().then(() => {
      fixture.detectChanges();
      const de = fixture.debugElement.query(By.css('.next-checkbox__input'));
      expect(de.nativeElement.disabled).toBe(true);
    });
  }));

  it('should be required when required=true', async(() => {
    component.required = true;

    fixture.detectChanges();
    fixture.whenStable().then(() => {
      fixture.detectChanges();
      const input = fixture.debugElement.query(By.css('.next-checkbox__input'));
      expect(input.nativeElement.required).toBeTruthy();
      /* validity of the form (always true and I don't know why)
      input.nativeElement.click();
      const submit = fixture.debugElement.query(By.css('.submit-input'));
      submit.nativeElement.click();

      expect(ngModel.valid).toBeTruthy();
   */
    });
  }));

  it('should not be required when required=false', async(() => {
    component.required = false;

    fixture.detectChanges();
    fixture.whenStable().then(() => {
      fixture.detectChanges();
      const input = fixture.debugElement.query(By.css('.next-checkbox__input'));
      expect(input.nativeElement.required).toBeFalsy();
    });
  }));

  // 1. tabIndex equels tabIndex that was set
  // 2. id in case of setting
  // 3. id in case of generating
  // NgModel form -> controlValueAccessorChangeFn and the component work => etoe tests
  // ReactiveForms -> controlValueAccessorChangeFn and the component work => etoe tests
  // 4. clicked when clicked
  // 5. not clicked when double clicked
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

describe('NextCheckboxComponent with ngModel', () => {
  let checkboxDebugElement: DebugElement;
  let component: CheckboxWithReactiveFormsComponent;
  let fixture: ComponentFixture<CheckboxWithReactiveFormsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [ReactiveFormsModule, FormsModule],
      declarations: [NextCheckboxComponent, CheckboxWithReactiveFormsComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CheckboxWithReactiveFormsComponent);
    fixture.detectChanges();
    component = fixture.componentInstance;
    checkboxDebugElement = fixture.debugElement.query(
      By.directive(NextCheckboxComponent)
    );
  });

  it('should be disabled when disabled=false', async(() => {
    component.disabled = false;

    fixture.detectChanges();
    fixture.whenStable().then(() => {
      fixture.detectChanges();
      const de = fixture.debugElement.query(By.css('.next-checkbox__input'));
      expect(de.nativeElement.disabled).toBe(false);
    });
  }));

  it('should be enabled when disabled=true', async(() => {
    component.disabled = true;

    fixture.detectChanges();
    fixture.whenStable().then(() => {
      fixture.detectChanges();
      const de = fixture.debugElement.query(By.css('.next-checkbox__input'));
      expect(de.nativeElement.disabled).toBe(true);
    });
  }));

  it('should be required when required=true', async(() => {
    component.required = true;

    fixture.detectChanges();
    fixture.whenStable().then(() => {
      fixture.detectChanges();
      const input = fixture.debugElement.query(By.css('.next-checkbox__input'));
      expect(input.nativeElement.required).toBeTruthy();
      /* validity of the form (always true and I don't know why)
      input.nativeElement.click();
      const submit = fixture.debugElement.query(By.css('.submit-input'));
      submit.nativeElement.click();
      const formGroup = component.appFormGroup;
      expect(formGroup.valid).toBeTruthy();
      const checkbox = component.appFormGroup.controls['checkboxFormControl'];
      expect(checkbox.valid).toBeTruthy();
   */
    });
  }));

  it('should not be required when required=false', async(() => {
    component.required = false;

    fixture.detectChanges();
    fixture.whenStable().then(() => {
      fixture.detectChanges();
      const input = fixture.debugElement.query(By.css('.next-checkbox__input'));
      expect(input.nativeElement.required).toBeFalsy();
    });
  }));
});
