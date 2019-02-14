import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'next-checkbox-app';
  disabled = false;
  required = false;
  tabIndex = 1;
}
