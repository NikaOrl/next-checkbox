## Project setup

```
npm i next-header
```

## Basic usage example

### Add module into your app

```
import { NextHeaderModule } from 'next-header';

@NgModule({
  bootstrap: [AppComponent],
  declarations: [AppComponent],
  imports: [..., NextHeaderModule],
  providers: []
})
export class AppModule {
}

```

### Add markup to the template file

```
<next-header
  [env]="env"
  [projectName]="projectName"
  [description]="description"
  (projectNameClickEmitter)="onProjectNameClick()"
>
  <div help-slot>
    help-slot content
  </div>
  <div user-name-slot>
    user-name-slot content
  </div>
  <div logout-slot>
    logout-slot content
  </div>
</next-header>
```

## The header has:

### 3 inputs:

- env: string;
- projectName: string
- description: string

### 1 output:

- projectNameClickEmitter

### 3 transclusions:

- help-slot
- user-name-slot
- logout-slot

### The template for this example looks like the code below

```
<next-header
  [env]="'Predev'"
  [projectName]="'NEXT - Admin'"
  [description]="'External Science'"
  (projectNameClickEmitter)="onProjectNameClick()"
>
  <div help-slot>
    some buttons here
  </div>
  <div user-name-slot>
    user name and href="/" here
  </div>
  <div logout-slot>
    some buttons here
  </div>
</next-header>

```
