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
  <b>Species</b>
  <p>
    <next-checkbox
      [disabled]="false"
      [required]="false"
      [tabIndex]="1"
      [id]="'checkbox-1'"
    >
    </next-checkbox>
    <span>This one is not disabled</span>
  </p>
  <p>
    <next-checkbox
      [disabled]="true"
      [required]="true"
      [tabIndex]="2"
    >
    </next-checkbox>
    <span>This one is disabled</span>
  </p>
</div>
```
