import {async, ComponentFixture, TestBed} from '@angular/core/testing';
import {NextCheckboxComponent} from './next-checkbox.component';
import {By} from '@angular/platform-browser';
import {Component, DebugElement} from '@angular/core';
import {FormControl, FormsModule, NgModel, ReactiveFormsModule, FormGroup} from '@angular/forms';

@Component({
  template: `
    <form class="ng-model-form">
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
    </form>
  `,
})
class CheckboxWithNgModelComponent {
  public disabled: boolean;
  public required: boolean;
  public tabIndex: number;
  public id: string | null;
  public isChecked = true;
}

@Component({
  template: `
    <form class="ng-model-form">
      <div class="container">
        <next-checkbox
          [disabled]="disabled"
          [required]="required"
          [tabIndex]="tabIndex"
          [(ngModel)]="isChecked"
          name="checkbox"
        ></next-checkbox>
        <label for="checkbox-1">Some text</label>
      </div>
    </form>
  `,
})
class CheckboxWithNgModelWithoutIdComponent {
  public disabled: boolean;
  public required: boolean;
  public tabIndex: number;
  public isChecked = true;
}

@Component({
  template: `
    <form [formGroup]="appFormGroup" class="reactive-form">
      <div class="container">
        <next-checkbox
          [required]="required"
          [tabIndex]="tabIndex"
          [id]="id"
          formControlName="checkboxFormControl"
        ></next-checkbox>
        <label for="checkbox-1">Some text</label>
      </div>
    </form>
  `,
})
class CheckboxWithReactiveFormsComponent {
  public disabled: boolean;
  public required: boolean;
  public tabIndex: number;
  public id: string;
  public appFormGroup = new FormGroup({
    checkboxFormControl: new FormControl({
      value: true,
      disabled: this.disabled,
    }),
  });
}

@Component({
  template: `
    <form [formGroup]="appFormGroup" class="reactive-form">
      <div class="container">
        <next-checkbox
          [required]="required"
          [tabIndex]="tabIndex"
          formControlName="checkboxFormControl"
        ></next-checkbox>
        <label for="checkbox-1">Some text</label>
      </div>
    </form>
  `,
})
class CheckboxWithReactiveFormsWithoutIdComponent {
  public disabled: boolean;
  public required: boolean;
  public tabIndex: number;
  public appFormGroup = new FormGroup({
    checkboxFormControl: new FormControl({
      value: true,
      disabled: this.disabled,
    }),
  });
}

describe('NextCheckboxComponent', () => {
  let component: NextCheckboxComponent;
  let fixture: ComponentFixture<NextCheckboxComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [NextCheckboxComponent],
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

  it('should use default controlValueAccessorChangeFn function and be clicked if it\'s clicked', async(() => {
    fixture.whenStable().then(() => {
      fixture.detectChanges();
      const input = fixture.debugElement.query(By.css('.next-checkbox__input'));
      expect(input.nativeElement.checked).toBeFalsy(); // default state

      input.nativeElement.click();
      fixture.detectChanges();
      expect(input.nativeElement.checked).toBeTruthy(); // state after click

      input.nativeElement.click();
      fixture.detectChanges();
      expect(input.nativeElement.checked).toBeFalsy(); // state after double click
    });
  }));
});

describe('NextCheckboxComponent with ngModel', () => {
  let ngModel: NgModel;
  let checkboxDebugElement: DebugElement;
  let component: CheckboxWithNgModelComponent;
  let checkboxInstance: NextCheckboxComponent;
  let fixture: ComponentFixture<CheckboxWithNgModelComponent>;
  let fixtureWithoutId: ComponentFixture<CheckboxWithNgModelWithoutIdComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [FormsModule],
      declarations: [NextCheckboxComponent, CheckboxWithNgModelComponent, CheckboxWithNgModelWithoutIdComponent],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CheckboxWithNgModelComponent);
    fixture.detectChanges();
    fixtureWithoutId = TestBed.createComponent(CheckboxWithNgModelWithoutIdComponent);
    fixtureWithoutId.detectChanges();
    component = fixture.componentInstance;
    checkboxDebugElement = fixtureWithoutId.debugElement.query(By.directive(NextCheckboxComponent));
    checkboxInstance = checkboxDebugElement.componentInstance;
    ngModel = checkboxDebugElement.injector.get<NgModel>(NgModel);
  });

  it('should be pristine, untouched, and valid initially', () => {
    expect(ngModel.valid).toBe(true);
    expect(ngModel.pristine).toBe(true);
    expect(ngModel.touched).toBe(false);
  });

  it('should be enabled when disabled=false', async(() => {
    component.disabled = false;
    fixture.whenStable().then(() => {
      fixture.detectChanges();
      const de = fixture.debugElement.query(By.css('.next-checkbox__input'));
      expect(de.nativeElement.disabled).toBe(false);
    });
  }));

  it('should be disabled when disabled=true', async(() => {
    component.disabled = true;
    fixture.whenStable().then(() => {
      fixture.detectChanges();
      const de = fixture.debugElement.query(By.css('.next-checkbox__input'));
      expect(de.nativeElement.disabled).toBe(true);
    });
  }));

  it('should be required when required=true', async(() => {
    component.required = true;
    fixture.whenStable().then(() => {
      fixture.detectChanges();
      const input = fixture.debugElement.query(By.css('.next-checkbox__input'));
      expect(input.nativeElement.required).toBeTruthy();
    });
  }));

  it('should not be required when required=false', async(() => {
    component.required = false;
    fixture.whenStable().then(() => {
      fixture.detectChanges();
      const input = fixture.debugElement.query(By.css('.next-checkbox__input'));
      expect(input.nativeElement.required).toBeFalsy();
    });
  }));

  it('should have a tabIndex that was set', async(() => {
    component.tabIndex = 2;
    fixture.whenStable().then(() => {
      fixture.detectChanges();
      const input = fixture.debugElement.query(By.css('.next-checkbox__input'));
      expect(input.nativeElement.tabIndex).toBe(2);
    });
  }));

  it('should preserve the user-provided id', async(() => {
    component.id = 'test-checkbox';
    fixture.whenStable().then(() => {
      fixture.detectChanges();

      const inputByClass = fixture.debugElement.query(By.css('.next-checkbox__input'));
      const inputById = fixture.debugElement.query(By.css('#test-checkbox'));
      expect(inputByClass.nativeElement.id).toBe('test-checkbox');
      expect(inputByClass.nativeElement).toBe(inputById.nativeElement);
    });
  }));

  it('should generate a unique id for the checkbox input if no id is set', () => {
    const input = fixtureWithoutId.debugElement.query(By.css('.next-checkbox__input'));
    expect(checkboxInstance.inputId).toMatch(/next-checkbox-\d+-input/);
    expect(input.nativeElement.id).toMatch(/next-checkbox-\d+-input/);
  });

  it('should be clicked if it\'s clicked', async(() => {
    fixture.whenStable().then(() => {
      fixture.detectChanges();
      const input = fixture.debugElement.query(By.css('.next-checkbox__input'));
      expect(input.nativeElement.checked).toBeTruthy(); // default state

      input.nativeElement.click();
      fixture.detectChanges();
      expect(input.nativeElement.checked).toBeFalsy(); // state after click

      input.nativeElement.click();
      fixture.detectChanges();
      expect(input.nativeElement.checked).toBeTruthy(); // state after double click
    });
  }));
});

describe('NextCheckboxComponent with Reactive Forms', () => {
  let checkboxDebugElement: DebugElement;
  let component: CheckboxWithReactiveFormsComponent;
  let fixture: ComponentFixture<CheckboxWithReactiveFormsComponent>;
  let fixtureWithoutId: ComponentFixture<CheckboxWithReactiveFormsWithoutIdComponent>;
  let checkboxInstance: NextCheckboxComponent;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [ReactiveFormsModule],
      declarations: [
        NextCheckboxComponent,
        CheckboxWithReactiveFormsComponent,
        CheckboxWithReactiveFormsWithoutIdComponent,
      ],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CheckboxWithReactiveFormsComponent);
    fixture.detectChanges();
    fixtureWithoutId = TestBed.createComponent(CheckboxWithReactiveFormsWithoutIdComponent);
    fixtureWithoutId.detectChanges();
    component = fixture.componentInstance;
    checkboxDebugElement = fixtureWithoutId.debugElement.query(By.directive(NextCheckboxComponent));
    checkboxInstance = checkboxDebugElement.componentInstance;
  });

  it('should be enabled when disabled=false', async(() => {
    component.appFormGroup.controls.checkboxFormControl.enable();
    fixture.whenStable().then(() => {
      fixture.detectChanges();
      const de = fixture.debugElement.query(By.css('.next-checkbox__input'));
      expect(de.nativeElement.disabled).toBe(false);
    });
  }));

  it('should be disabled when disabled=true', async(() => {
    component.appFormGroup.controls.checkboxFormControl.disable();
    fixture.whenStable().then(() => {
      fixture.detectChanges();
      const de = fixture.debugElement.query(By.css('.next-checkbox__input'));
      expect(de.nativeElement.disabled).toBe(true);
    });
  }));

  it('should be required when required=true', async(() => {
    component.required = true;
    fixture.whenStable().then(() => {
      fixture.detectChanges();
      const input = fixture.debugElement.query(By.css('.next-checkbox__input'));
      expect(input.nativeElement.required).toBeTruthy();
    });
  }));

  it('should not be required when required=false', async(() => {
    component.required = false;
    fixture.whenStable().then(() => {
      fixture.detectChanges();
      const input = fixture.debugElement.query(By.css('.next-checkbox__input'));
      expect(input.nativeElement.required).toBeFalsy();
    });
  }));

  it('should have a tabIndex that was set', async(() => {
    component.tabIndex = 2;
    fixture.whenStable().then(() => {
      fixture.detectChanges();
      const input = fixture.debugElement.query(By.css('.next-checkbox__input'));
      expect(input.nativeElement.tabIndex).toBe(2);
    });
  }));

  it('should have an id that was set', async(() => {
    component.id = 'test-checkbox';
    fixture.whenStable().then(() => {
      fixture.detectChanges();
      const inputByClass = fixture.debugElement.query(By.css('.next-checkbox__input'));
      const inputById = fixture.debugElement.query(By.css('#test-checkbox'));
      expect(inputByClass.nativeElement).toBe(inputById.nativeElement);
    });
  }));

  it('should generate a unique id for the checkbox input if no id is set', () => {
    const inputByClass = fixtureWithoutId.debugElement.query(By.css('.next-checkbox__input'));
    expect(checkboxInstance.inputId).toMatch(/next-checkbox-\d+-input/);
    expect(inputByClass.nativeElement.id).toMatch(/next-checkbox-\d+-input/);
  });

  it('should be clicked if it\'s clicked', async(() => {
    fixture.whenStable().then(() => {
      fixture.detectChanges();
      const input = fixture.debugElement.query(By.css('.next-checkbox__input'));
      expect(input.nativeElement.checked).toBeTruthy(); // default state

      input.nativeElement.click();
      fixture.detectChanges();
      expect(input.nativeElement.checked).toBeFalsy(); // state after click

      input.nativeElement.click();
      fixture.detectChanges();
      expect(input.nativeElement.checked).toBeTruthy(); // state after double click
    });
  }));
});
