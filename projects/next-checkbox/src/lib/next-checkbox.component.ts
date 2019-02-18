import {
  Component,
  Input,
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  forwardRef
} from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

@Component({
  selector: 'next-checkbox',
  styleUrls: ['./next-checkbox.component.scss'],
  templateUrl: './next-checkbox.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => NextCheckboxComponent),
      multi: true
    }
  ]
})
export class NextCheckboxComponent implements ControlValueAccessor {
  @Input() disabled: boolean;
  @Input() required: boolean;
  @Input() tabIndex: number;

  inputId: string;

  private inputIdGenerator = this.idGenerator('next-checkbox', 'input');

  private _checked = false;

  get checked(): any {
    return this._checked;
  }

  set checked(checked: any) {
    if (checked !== this.checked) {
      this._checked = checked;
      this._changeDetectorRef.markForCheck();
    }
  }

  private _changeDetectorRef: ChangeDetectorRef;
  protected controlValueAccessorChangeFn: (value: any) => void;
  protected onTouched: (value: any) => void;

  constructor(changeDetectorRef: ChangeDetectorRef) {
    this.inputId = this.inputIdGenerator();
    this._changeDetectorRef = changeDetectorRef;
  }

  onChange(event: Event): void {
    this.checked = !this.checked;
    this.controlValueAccessorChangeFn(this.checked);
  }

  writeValue(value: any): void {
    this.checked = value;
  }

  registerOnChange(fn: any): void {
    this.controlValueAccessorChangeFn = fn;
  }

  registerOnTouched(fn: any): void {
    this.onTouched = fn;
  }

  idGenerator(prefix: string, postfix: string): () => string {
    let counter = 0;
    return () => `${prefix}-${++counter}-${postfix}`;
  }

  setDisabledState(isDisabled: boolean): void {
    this.disabled = isDisabled;
    this._changeDetectorRef.markForCheck();
  }
}
