## The checkboxes with different tabIndex

### *Try to push Tab for the ckeckboxes*

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
  <b>Species</b>
  <p>
    <next-checkbox
      [disabled]="false"
      [required]="false"
      [tabIndex]="1"
      [id]="'checkbox-1'"
    >
    </next-checkbox>
    <span>The first one</span>
  </p>
  <p>
    <next-checkbox
      [disabled]="false"
      [required]="false"
      [tabIndex]="4"
      [id]="'checkbox-2'"
    >
    </next-checkbox>
    <span>The fourth one</span>
  </p>
  ...
</div>
```
