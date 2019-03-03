import {Component} from '@angular/core';
import {FormControl, FormGroup} from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
})
export class AppComponent {
  public title = 'next-checkbox-app';
  public disabled = false;
  public required = false;
  public tabIndex = 1;
  public isChecked = true;
  public appFormGroup = new FormGroup({
    checkboxFormControl: new FormControl({
      value: true,
      disabled: this.disabled,
    }),
  });
}
