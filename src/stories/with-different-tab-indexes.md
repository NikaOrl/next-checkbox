## The checkboxes with different tabIndex

### _Try to push Tab for the ckeckboxes_

You can set different tabIndexes to the checkboxes

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
        [(ngModel)]="isChecked"
      >
      </next-checkbox>
      <label for="checkbox-1">The first one</label>
    </div>
    ...
  </form>
</div>
```
