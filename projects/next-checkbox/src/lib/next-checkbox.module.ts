import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NextCheckboxComponent } from './next-checkbox.component';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [NextCheckboxComponent],
  imports: [CommonModule, FormsModule],
  exports: [NextCheckboxComponent]
})
export class NextCheckboxModule {}
