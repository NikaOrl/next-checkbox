## The checkboxes with different font-sizes

You can set different sizes to the checkbox in different places

### The template for this example looks like the code below

```
<style>
  .container {
    font-size: 30px;
    font-family: sans-serif;
    padding: 50px;
  }
  .label {
    padding-bottom: 5px;
  }
  .label-14 {
    font-size: 14px;
  }
  ...
</style>

<div class="container">
  <b>Species</b>
  <div class="label label-14">
    <next-checkbox
      [disabled]="false"
      [required]="false"
      [tabIndex]="1"
    >
      <span>14px</span>
    </next-checkbox>
  </div>
  ...
</div>
```
