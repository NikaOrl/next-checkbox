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
  :invalid .error {
    color: red;
  }
  :valid .success {
    color: #0460a9;
  }
</style>
<div class="container">
  <div class="title">title</div>
  <form>
    <next-checkbox
      [disabled]="disabled"
      [required]="true"
      [tabIndex]="tabIndex"
    >
      <span>Dog (426)</span>
    </next-checkbox>
    <p class="error">This checkbox is required</p>
    <next-checkbox
      [disabled]="disabled"
      [required]="false"
      [tabIndex]="tabIndex"
    >
      <span>Cynomolgus (24)</span>
    </next-checkbox>
    <input type="submit" class="btn">
    <p class="success">This form is valid</p>
  </form>
</div>
```
