import { Component } from '@angular/core';
import { IAppState } from "../store";

@Component({
  selector: 'ellzap-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'Whiteboard with Redux';
  constructor() {}
}
