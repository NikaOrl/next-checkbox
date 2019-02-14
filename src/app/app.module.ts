import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { NextCheckboxModule } from 'next-checkbox';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, AppRoutingModule, NextCheckboxModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
