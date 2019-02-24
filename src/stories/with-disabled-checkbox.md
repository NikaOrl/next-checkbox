## The disables checkbox

You can disable the checkbox

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
    <div>
      <next-checkbox
        [disabled]="false"
        [required]="false"
        [tabIndex]="1"
        [id]="'checkbox-1'"
        name="checkbox1"
        [(ngModel)]="isFirstChecked"
      >
      </next-checkbox>
      <label for="checkbox-1">This one is not disabled</label>
    </div>
    <div>
      <next-checkbox
        [disabled]="true"
        [required]="false"
        [tabIndex]="2"
        [id]="'checkbox-2'"
        name="checkbox2"
        [(ngModel)]="isSecondChecked"
      >
      </next-checkbox>
      <label for="checkbox-2">This one is disabled</label>
    </div>
    <div>
      <next-checkbox
        [disabled]="true"
        [required]="false"
        [tabIndex]="3"
        [id]="'checkbox-3'"
        name="checkbox3"
        [(ngModel)]="isThirdChecked"
      >
      </next-checkbox>
      <label for="checkbox-3">This one is disabled and checked</label>
    </div>
  </form>
</div>
```
