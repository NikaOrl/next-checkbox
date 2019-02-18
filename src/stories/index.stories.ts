import { storiesOf } from '@storybook/angular';
import { NextCheckboxComponent } from 'next-checkbox';
import { withNotes } from '@storybook/addon-notes';
import { withKnobs } from '@storybook/addon-knobs';
import * as marked from 'marked';
import defaultText from './default.md';

const styles = `
  <style>
  .some-message \{
  \}
  .container \{
    font-size: 30px;
    font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
    padding: 50px;
  \}
  .container-14 \{
    font-size: 14px;
    padding-bottom: 5px;
  \}
  .container-28 \{
    font-size: 28px;
    padding-bottom: 5px;
  \}
  .container-42 \{
    font-size: 42px;
    padding-bottom: 5px;
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
        <b>Species</b>
        <next-checkbox
          [disabled]="false"
          [required]="false"
          [tabIndex]="1"
        >
          <span class="some-message">Cynomolgus (24)</span>
        </next-checkbox>
        <next-checkbox
          [disabled]="false"
          [required]="false"
          [tabIndex]="3"
        >
          <span class="some-message">Cynomolgus (24)</span>
        </next-checkbox>
        <next-checkbox
          [disabled]="false"
          [required]="true"
          [tabIndex]="2"
        >
          <span class="some-message">Dog (426)</span>
        </next-checkbox>
        <next-checkbox
          [disabled]="false"
          [required]="true"
          [tabIndex]="15"
        >
          <span class="some-message">Human (71)</span>
        </next-checkbox>
      </div>
    `
    }))
  )
  .add(
    'With disabled chackbox',
    withNotes({ text: marked(defaultText) })(() => ({
      moduleMetadata: {
        declarations: [NextCheckboxComponent]
      },
      template: `
      ${styles}
      <div class="container">
      <form >
        <b>Species</b>
        <next-checkbox
          [disabled]="false"
          [required]="false"
          [tabIndex]="1"
        >
          <span class="some-message">This one is not disabled</span>
        </next-checkbox>
        <next-checkbox
          [disabled]="true"
          [required]="true"
          [tabIndex]="2"
        >
          <span class="some-message">This one is disabled</span>
        </next-checkbox>
        </form >
      </div>
    `
    }))
  )
  .add(
    'With different font-sizes',
    withNotes({ text: marked(defaultText) })(() => ({
      moduleMetadata: {
        declarations: [NextCheckboxComponent]
      },
      template: `
      ${styles}
      <div class="container">
        <b>Species</b>
        <div class="container-14">
          <next-checkbox
            [disabled]="false"
            [required]="false"
            [tabIndex]="1"
          >
            <span class="some-message">14px</span>
          </next-checkbox>
        </div>
        <div class="container-28">
          <next-checkbox
            [disabled]="false"
            [required]="true"
            [tabIndex]="2"
          >
            <span class="some-message">28px</span>
          </next-checkbox>
        </div>
        <div class="container-42">
          <next-checkbox
            [disabled]="false"
            [required]="true"
            [tabIndex]="2"
          >
            <span class="some-message">42px</span>
          </next-checkbox>
        </div>
      </div>
    `
    }))
  );
