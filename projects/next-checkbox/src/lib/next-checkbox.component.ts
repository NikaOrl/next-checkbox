import {
  Component,
  Input,
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  forwardRef
} from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

let nextUniqueId = 0;

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
  @Input() id: string;

  get inputId(): string { return this.id || this.idGenerator(); }

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
  protected onTouched: (value: any) => void;

  constructor(changeDetectorRef: ChangeDetectorRef) {
    this._changeDetectorRef = changeDetectorRef;
  }

  protected controlValueAccessorChangeFn: (value: any) => void = () => null;
  protected idGenerator(): string { return `next-checkbox-${++nextUniqueId}-input`; }

  onChange(): void {
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

  setDisabledState(isDisabled: boolean): void {
    this.disabled = isDisabled;
    this._changeDetectorRef.markForCheck();
  }
}
