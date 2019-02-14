import {
  Component,
  Input,
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  forwardRef
} from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';
// import {BaseCheckbox, getCheckboxValueAccessor, idGenerator} from '../base-checkbox';

export function getCheckboxValueAccessor(componentClass): any {
  return {
    provide: NG_VALUE_ACCESSOR,
    useExisting: forwardRef(() => componentClass),
    multi: true
  };
}
@Component({
  selector: 'next-checkbox',
  styleUrls: ['./next-checkbox.component.scss'],
  templateUrl: './next-checkbox.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [getCheckboxValueAccessor(NextCheckboxComponent)]
})
export class NextCheckboxComponent implements ControlValueAccessor {
  @Input() disabled: boolean;
  @Input() required: boolean;
  @Input() tabIndex: number;
  private _changeDetectorRef: ChangeDetectorRef;
  protected controlValueAccessorChangeFn: (value: any) => void;
  protected onTouched: (value: any) => void;

  private _checked = false;
  private inputIdGenerator = this.idGenerator('next-checkbox', 'input');
  get checked(): any {
    return this._checked;
  }

  set checked(checked: any) {
    if (checked !== this.checked) {
      this._checked = checked;
      this._changeDetectorRef.markForCheck();
    }
  }

  // private _required: boolean;

  /* get required(): boolean {
    return this._required;
  }

  set required(value) {
    this._required = coerceBooleanProperty(value);
  } */

  // disabled = false;
  inputId: string;
  // tabIndex = 0;

  writeValue(value: any): void {
    this.checked = value;
  }

  registerOnChange(fn: any): void {
    this.controlValueAccessorChangeFn = fn;
  }

  registerOnTouched(fn: any): void {
    this.onTouched = fn;
  }

  setDisabledState(isDisabled: boolean): void {
    this.disabled = isDisabled;
    this._changeDetectorRef.markForCheck();
  }

  onChange(event: Event): void {
    this.checked = !this.checked;
    this.controlValueAccessorChangeFn(this.checked);
  }

  idGenerator(prefix: string, postfix: string): () => string {
    let counter = 0;
    return () => `${prefix}-${++counter}-${postfix}`;
  }

  constructor(changeDetectorRef: ChangeDetectorRef) {
    this.inputId = this.inputIdGenerator();
    this._changeDetectorRef = changeDetectorRef;
  }
}
