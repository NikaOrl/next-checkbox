## Project setup

```
npm i next-checkbox
```

## Basic usage example

### Add module into your app

```
import { NextCheckboxModule } from 'next-checkbox';

@NgModule({
  bootstrap: [AppComponent],
  declarations: [AppComponent],
  imports: [..., NextCheckboxModule],
  providers: []
})
export class AppModule {
}

```

### Add markup to the template file

```
<next-checkbox
  [disabled]="disabled"
  [required]="required"
  [tabIndex]="tabIndex"
>
  <span>Some label here</span>
</next-checkbox>
```

## The checkbox has:

### 3 inputs:

- disabled: boolean;
- required: boolean;
- tabIndex: number.

### 1 transclusion:

- Any label you want to be near the checkbox

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
    <b>Title</b>
    <next-checkbox
      [disabled]="false"
      [required]="false"
      [tabIndex]="1"
    >
      <span>Some label here</span>
    </next-checkbox>
  </div>

```
