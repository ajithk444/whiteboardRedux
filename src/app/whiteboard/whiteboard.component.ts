import { Component, OnInit } from '@angular/core';
import {select} from "@angular-redux/store";
import {Observable} from "rxjs";
import {WhiteboardActions} from "./whiteboard.actions";
//import {IAppState} from "../../store";

@Component({
  selector: 'ellzap-whiteboard',
  templateUrl: './whiteboard.component.html',
  styleUrls: ['./whiteboard.component.css']
})
export class WhiteboardComponent implements OnInit {
  @select() readonly wbTitle$: Observable<string>;
  @select() readonly wbWidth$: Observable<number>;
  @select() readonly wbHeight$: Observable<number>;

  //constructor(private ngRedux: NgRedux<IAppState>,
  //            private actions: CounterActions) { }
  constructor() {};

  ngOnInit() {

  }

}
