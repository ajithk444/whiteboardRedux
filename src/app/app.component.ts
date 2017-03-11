import { Component } from '@angular/core';
import {IAppState} from "../store";
import {NgRedux, select} from "@angular-redux/store";
import {CounterActions} from "./app.actions";

import {Observable} from "rxjs";

@Component({
  selector: 'ellzap-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'Whiteboard with Redux';
  @select() readonly count$: Observable<number>;

  constructor(
    private ngRedux: NgRedux<IAppState>,
    private actions: CounterActions
  ) {}


  increment() {
    this.ngRedux.dispatch(this.actions.increment());
  } // of increment()

  decrement() {
    this.ngRedux.dispatch(this.actions.decrement());
  }
}
