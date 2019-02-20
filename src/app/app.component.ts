import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'next-checkbox-app';
  disabled = false;
  required = false;
  tabIndex = 1;
  formControl = new FormControl({ checked: true });
  isChecked = true;
}
