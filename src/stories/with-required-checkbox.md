## The required checkbox

You can make the checkbox required

### The template for this example looks like the code below

```
<style>
  .container {
    font-size: 30px;
    font-family: sans-serif;
    padding: 50px;
  }
  .success {
    color: #0460a9;
    visibility: hidden;
  }
  :valid .success {
    visibility: visible;
  }
</style>
<div class="container">
  <form ngNativeValidate>
    <div class="title">
      <b>Form title</b>
    </div>
    <div>
      <next-checkbox
        [disabled]="disabled"
        [required]="true"
        [tabIndex]="tabIndex"
        [id]="'checkbox-1'"
        name="checkbox1"
        [(ngModel)]="isFirstChecked"
      >
      </next-checkbox>
      <label for="checkbox-1">This checkbox is required</label>
    </div>
    <div>
      <next-checkbox
        [disabled]="disabled"
        [required]="false"
        [tabIndex]="tabIndex"
        [id]="'checkbox-2'"
        name="checkbox2"
        [(ngModel)]="isSecondChecked"
      >
      </next-checkbox>
      <label for="checkbox-2">This checkbox is not required</label>
    </div>
    <input type="submit" class="btn">
    <div class="success">This form is valid</div>
  </form>
</div>
```
