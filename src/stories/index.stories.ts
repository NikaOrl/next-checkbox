import { storiesOf } from '@storybook/angular';
import { NextCheckboxComponent } from 'next-checkbox';
import { withNotes } from '@storybook/addon-notes';
import { withKnobs } from '@storybook/addon-knobs';
import * as marked from 'marked';
import defaultText from './default.md';
import withDifferentFontSizes from './with-different-font-sizes.md';
import withDisabledCheckbox from './with-disabled-checkbox.md';
import withDifferentTabIndexes from './with-different-tab-indexes.md';
import withRequiredCheckbox from './with-required-checkbox.md';

const styles = `
  <style>
  .container \{
    font-size: 30px;
    font-family: sans-serif;
    padding: 50px;
  \}
  .label \{
    padding-bottom: 5px;
  \}
  .label-14 \{
    font-size: 14px;
  \}
  .label-28 \{
    font-size: 28px;
  \}
  .label-42 \{
    font-size: 42px;
  \}
  .error \{
    font-size: 40%;
    color: #00000000;
    margin:0;
    margin-bottom: 15px;
  \}
  :invalid .error \{
    color: red;
  \}
  .success \{
    font-size: 40%;
    color: #00000000;
    margin:0;
    text-align: center;
    margin: 8px auto;
  \}
  :valid .success \{
    color: #0460a9;
  \}
  .btn \{
    background-color: #0460a9;
    border: none;
    color: white;
    padding: 15px 32px;
    text-align: center;
    text-decoration: none;
    display: block;
    margin: 20px auto 10px auto;
    font-size: 16px;
    cursor: pointer;
  \}
  .title \{
    margin-bottom: 20px;
  \}
  </style>
`;

storiesOf('next-checkbox', module)
  .addDecorator(withKnobs)
  .add(
    'Install',
    withNotes({ text: marked(defaultText) })(() => ({
      moduleMetadata: {
        declarations: [NextCheckboxComponent]
      },
      template: `
      ${styles}
      <div class="container">
        <div class="title">
          <b>Species</b>
        </div>
        <p>
          <next-checkbox
            [disabled]="false"
            [required]="false"
            [tabIndex]="1"
            [id]="'checkbox-1'"
          >
          </next-checkbox>
          <span>Cynomolgus (24)</span>
        </p>
      </div>
    `
    }))
  )
  .add(
    'With different font-sizes',
    withNotes({ text: marked(withDifferentFontSizes) })(() => ({
      moduleMetadata: {
        declarations: [NextCheckboxComponent]
      },
      template: `
      ${styles}
      <div class="container">
        <div class="title">
          <b>Species</b>
        </div>
        <div class="label label-14">
          <next-checkbox
            [disabled]="false"
            [required]="false"
            [tabIndex]="1"
          >
          </next-checkbox>
          <span>14px</span>
        </div>
        <div class="label label-28">
          <next-checkbox
            [disabled]="false"
            [required]="true"
            [tabIndex]="2"
          >
          </next-checkbox>
          <span>28px</span>
        </div>
        <div class="label label-42">
          <next-checkbox
            [disabled]="false"
            [required]="true"
            [tabIndex]="2"
          >
          </next-checkbox>
          <span>42px</span>
        </div>
      </div>
    `
    }))
  )
  .add(
    'With disabled checkbox',
    withNotes({ text: marked(withDisabledCheckbox) })(() => ({
      moduleMetadata: {
        declarations: [NextCheckboxComponent]
      },
      template: `
      ${styles}
      <div class="container">
        <div class="title">
          <b>Species</b>
        </div>
        <p>
          <next-checkbox
            [disabled]="false"
            [required]="false"
            [tabIndex]="1"
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
    `
    }))
  )
  .add(
    'With different tabIndexes',
    withNotes({ text: marked(withDifferentTabIndexes) })(() => ({
      moduleMetadata: {
        declarations: [NextCheckboxComponent]
      },
      template: `
      ${styles}
      <div class="container">
        <div class="title">
          <b>Species</b>
        </div>
        <p>
          <next-checkbox
            [disabled]="false"
            [required]="false"
            [tabIndex]="1"
          >
          </next-checkbox>
          <span>The first one</span>
        </p>
        <p>
          <next-checkbox
            [disabled]="false"
            [required]="false"
            [tabIndex]="4"
          >
          </next-checkbox>
          <span>The fourth one</span>
        </p>
        <p>
          <next-checkbox
            [disabled]="false"
            [required]="true"
            [tabIndex]="2"
          >
          </next-checkbox>
          <span>The second one</span>
        </p>
        <p>
          <next-checkbox
            [disabled]="false"
            [required]="true"
            [tabIndex]="3"
          >
          </next-checkbox>
          <span>The third one</span>
        </p>
        <p>
          <next-checkbox
            [disabled]="false"
            [required]="true"
            [tabIndex]="5"
          >
          </next-checkbox>
          <span>The fifth one</span>
        </p>
      </div>
    `
    }))
  )
  .add(
    'With required checkbox',
    withNotes({ text: marked(withRequiredCheckbox) })(() => ({
      moduleMetadata: {
        declarations: [NextCheckboxComponent]
      },
      template: `
      ${styles}
      <div class="container">
        <div class="title">
          <b>Species</b>
        </div>
        <form>
          <div>
            <next-checkbox
              [disabled]="disabled"
              [required]="true"
              [tabIndex]="tabIndex"
            >
            </next-checkbox>
            <span>Dog (426)</span>
          </div>
          <p class="error">This checkbox is required</p>
          <div>
            <next-checkbox
              [disabled]="disabled"
              [required]="false"
              [tabIndex]="tabIndex"
            >
            </next-checkbox>
            <span>Cynomolgus (24)</span>
          </div>
          <input type="submit" class="btn">
          <p class="success">This form is valid</p>
        </form>
      </div>
    `
    }))
  );
