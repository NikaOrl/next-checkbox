import { storiesOf } from '@storybook/angular';
import { NextCheckboxComponent } from '../../projects/next-checkbox/src/public_api';
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
  .success \{
    font-size: 40%;
    color: #0460a9;
    visibility: hidden;
    margin:0;
    text-align: center;
    margin: 8px auto;
  \}
  :valid .success \{
    visibility: visible;
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

export const checkboxForDefaultText = {
  isChecked: true
};

export const checkboxWithDifferentProperties = {
  isFirstChecked: true,
  isFirstUnChecked: false,
  isSecondChecked: false,
  isThirdChecked: true
};

export const checkboxWithDifferentTabIndexes = {
  isFirstChecked: false,
  isSecondChecked: false,
  isThirdChecked: false,
  isForthChecked: false,
  isFifthChecked: false
};

export const checkboxWithRequiredProperties = {
  isFirstChecked: false,
  isSecondChecked: false
};

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
          <form>
            <div class="title">
              <b>Form title</b>
            </div>
            <next-checkbox
              [disabled]="false"
              [required]="false"
              [tabIndex]="2"
              [id]="'checkbox-1'"
              name="checkbox"
              [(ngModel)]="checkboxForDefaultText.isChecked"
            ></next-checkbox>
            <label for="checkbox-1">Some text</label>
          </form>
        </div>
      `,
      props: { checkboxForDefaultText }
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
          <form>
            <div class="title">
              <b>Form title</b>
            </div>
            <div class="label label-14">
              <next-checkbox
                [disabled]="false"
                [required]="false"
                [tabIndex]="1"
                [id]="'checkbox-1'"
                name="checkbox14"
                [(ngModel)]="checkboxWithDifferentProperties.isFirstChecked"
              >
              </next-checkbox>
              <label for="checkbox-1">14px</label>
            </div>
            <div class="label label-28">
              <next-checkbox
                [disabled]="false"
                [required]="false"
                [tabIndex]="2"
                [id]="'checkbox-2'"
                name="checkbox28"
                [(ngModel)]="checkboxWithDifferentProperties.isSecondChecked"
              >
              </next-checkbox>
              <label for="checkbox-2">28px</label>
            </div>
            <div class="label label-42">
              <next-checkbox
                [disabled]="false"
                [required]="false"
                [tabIndex]="3"
                [id]="'checkbox-3'"
                name="checkbox42"
                [(ngModel)]="checkboxWithDifferentProperties.isThirdChecked"
              >
              </next-checkbox>
              <label for="checkbox-3">42px</label>
            </div>
          </form>
        </div>
      `,
      props: { checkboxWithDifferentProperties }
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
                [(ngModel)]="checkboxWithDifferentProperties.isFirstChecked"
              >
              </next-checkbox>
              <label for="checkbox-1">This one is not disabled</label>
            </div>
            <div>
              <next-checkbox
                [disabled]="false"
                [required]="false"
                [tabIndex]="1"
                id="checkbox-21"
                name="checkbox21"
                [(ngModel)]="checkboxWithDifferentProperties.isFirstUnChecked"
              >
              </next-checkbox>
              <label for="checkbox-21">This one is not disabled</label>
            </div>
            <div>
              <next-checkbox
                [disabled]="true"
                [required]="false"
                [tabIndex]="2"
                [id]="'checkbox-2'"
                name="checkbox2"
                [(ngModel)]="checkboxWithDifferentProperties.isSecondChecked"
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
                [(ngModel)]="checkboxWithDifferentProperties.isThirdChecked"
              >
              </next-checkbox>
              <label for="checkbox-3">This one is disabled and checked</label>
            </div>
          </form>
        </div>
      `,
      props: { checkboxWithDifferentProperties }
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
                [(ngModel)]="checkboxWithDifferentTabIndexes.isFirstChecked"
              >
              </next-checkbox>
              <label for="checkbox-1">The first one</label>
            </div>
            <div>
              <next-checkbox
                [disabled]="false"
                [required]="false"
                [tabIndex]="4"
                [id]="'checkbox-2'"
                name="checkbox2"
                [(ngModel)]="checkboxWithDifferentTabIndexes.isSecondChecked"
              >
              </next-checkbox>
              <label for="checkbox-2">The fourth one</label>
            </div>
            <div>
              <next-checkbox
                [disabled]="false"
                [required]="false"
                [tabIndex]="2"
                [id]="'checkbox-3'"
                name="checkbox3"
                [(ngModel)]="checkboxWithDifferentTabIndexes.isThirdChecked"
              >
              </next-checkbox>
              <label for="checkbox-3">The second one</label>
            </div>
            <div>
              <next-checkbox
                [disabled]="false"
                [required]="false"
                [tabIndex]="3"
                [id]="'checkbox-4'"
                name="checkbox4"
                [(ngModel)]="checkboxWithDifferentTabIndexes.isFourthChecked"
              >
              </next-checkbox>
              <label for="checkbox-4">The third one</label>
            </div>
            <div>
              <next-checkbox
                [disabled]="false"
                [required]="false"
                [tabIndex]="5"
                [id]="'checkbox-5'"
                name="checkbox5"
                [(ngModel)]="checkboxWithDifferentTabIndexes.isFifthChecked"
              >
              </next-checkbox>
              <label for="checkbox-5">The fifth one</label>
            </div>
          </form>
        </div>
      `,
      props: { checkboxWithDifferentTabIndexes }
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
                [(ngModel)]="checkboxWithRequiredProperties.isFirstChecked"
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
                [(ngModel)]="checkboxWithRequiredProperties.isSecondChecked"
              >
              </next-checkbox>
              <label for="checkbox-2">This checkbox is not required</label>
            </div>
            <input type="submit" class="btn" value="Submit">
            <div class="success">This form is valid</div>
          </form>
        </div>
      `,
      props: { checkboxWithRequiredProperties }
    }))
  );
