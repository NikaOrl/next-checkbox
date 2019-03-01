import {
  Component,
  Input,
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  forwardRef,
  AfterViewInit,
  Renderer2,
  ElementRef,
} from '@angular/core';
import {ControlValueAccessor, NG_VALUE_ACCESSOR} from '@angular/forms';

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
      multi: true,
    },
  ],
})
export class NextCheckboxComponent implements ControlValueAccessor, AfterViewInit {

  get inputId(): string {
    return this.id;
  }

  get checked(): any {
    return this._checked;
  }

  set checked(checked: any) {
    if (checked !== this.checked) {
      this._checked = checked;
      this.changeDetectorRef.markForCheck();
    }
  }
  @Input() public disabled: boolean;
  @Input() public required: boolean;
  @Input() public tabIndex: number;
  @Input() public id = `next-checkbox-${++nextUniqueId}-input`;

  protected onTouched: (value: any) => void;

  private _checked = false;

  constructor(private changeDetectorRef: ChangeDetectorRef, private render: Renderer2, private el: ElementRef) {}

  public ngAfterViewInit() {
    this.render.removeAttribute(this.el.nativeElement, 'id');
  }

  public onChange(): void {
    this.checked = !this.checked;
    this.controlValueAccessorChangeFn(this.checked);
  }

  public writeValue(value: any): void {
    this.checked = value;
  }

  public registerOnChange(fn: any): void {
    this.controlValueAccessorChangeFn = fn;
  }

  public registerOnTouched(fn: any): void {
    this.onTouched = fn;
  }

  public setDisabledState(isDisabled: boolean): void {
    this.disabled = isDisabled;
    this.changeDetectorRef.markForCheck();
  }
  protected controlValueAccessorChangeFn: (value: any) => void = () => null;
}
