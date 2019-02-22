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
  [id]="id"
>
</next-checkbox>
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
    <b>Title</b>
    <p>
      <next-checkbox
        [disabled]="false"
        [required]="false"
        [tabIndex]="1"
        [id]="'checkbox-1'"
      >
      </next-checkbox>
      <span>Some label here</span>
    </p>
  </div>

```
