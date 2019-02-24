## Project setup

```
npm i next-checkbox
```

## Basic usage example with NgModel

### Add module into your app

```
import { NextCheckboxModule } from 'next-checkbox';
import { FormsModule } from '@angular/forms';

@NgModule({
  bootstrap: [AppComponent],
  declarations: [AppComponent],
  imports: [
    ..., NextCheckboxModule, FormsModule
  ],
  providers: []
})
export class AppModule {
}

```

### Add code to the component file

```
@Component({
  export class AppComponent {
    ...
    isChecked = true;
  }
  ...
```

### Add markup to the template file

```
<form>
  <next-checkbox
    [disabled]="disabled"
    [required]="required"
    [tabIndex]="tabIndex"
    [id]="id"
    name="checkbox"
    [(ngModel)]="isChecked"
  ></next-checkbox>
  <label for="{{id}}">Some text</label>
</form>
```

## Basic usage example with Reactive Forms

### Add module into your app

```
import { NextCheckboxModule } from 'next-checkbox';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  bootstrap: [AppComponent],
  declarations: [AppComponent],
  imports: [..., NextCheckboxModule, ReactiveFormsModule],
  providers: []
})
export class AppModule {
}

```

### Add code to the component file

```
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  export class AppComponent {
    ...
    appFormGroup = new FormGroup({
      checkboxFormControl: new FormControl({ checked: true })
    });
  }
  ...
```

### Add markup to the template file

```
<form [formGroup]="appFormGroup">
  <next-checkbox
    [disabled]="disabled"
    [required]="required"
    [tabIndex]="tabIndex"
    [id]="id"
    formControlName="checkboxFormControl"
  ></next-checkbox>
  <label for="{{id}}">Some text</label>
</form>
```

## The checkbox has:

### 4 inputs:

- disabled: boolean;
- required: boolean;
- tabIndex: number;
- id: string.

(In case of missing the id, it will be automatically generated)

### The template for this example looks like the code below

```
<style>
  .container {
    font-size: 30px;
    font-family: sans-serif;
    padding: 50px;
  }
  </style>

  <div class="container">
    <form>
      <div class="title">
        <b>Form title</b>
      </div>
      <next-checkbox
        [disabled]="false"
        [required]="false"
        [tabIndex]="2"
        [id]="'checkbox-1'"
        name="checkbox"
        [(ngModel)]="isChecked"
      ></next-checkbox>
      <label for="checkbox-1">Some text</label>
    </form>
  </div>
```
