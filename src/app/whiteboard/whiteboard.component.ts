import { Component, OnInit } from '@angular/core';
import {select, NgRedux} from "@angular-redux/store";
import {Observable} from "rxjs";
import {WhiteboardActions} from "./whiteboard.actions";
import {IAppState} from "../../store";
import {StickerActions} from "../sticker/sticker.actions";
import {ISticker} from "../sticker/sticker.interface";
import {IPoint} from "../helpers/point.interface";
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
  @select() readonly stickers$: Observable<Array<ISticker>>;

  //constructor(private ngRedux: NgRedux<IAppState>,
  //            private actions: CounterActions) { }
  constructor(private ngRedux: NgRedux<IAppState>) {};

  ngOnInit() {

  }

  // *** normal functions: ***

  // *** WB Actions: ***
  heightPlus() {
    this.ngRedux.dispatch(WhiteboardActions.increaseHeight(10));
  }
  heightMinus() {
    this.ngRedux.dispatch(WhiteboardActions.increaseHeight(-10));
  }

  widthPlus() {
    this.ngRedux.dispatch(WhiteboardActions.increaseWidth(10));
  }
  widthMinus() {
    this.ngRedux.dispatch(WhiteboardActions.increaseWidth(-10));
  }

  // *** Sticker Actions: ***
  stickerSelected($event:{stID:number, pos:IPoint}){
    this.ngRedux.dispatch(StickerActions.toggleSelected($event.stID, $event.pos));
  }

  stickerMove($event:{stID:number, delta:IPoint}) {
    this.ngRedux.dispatch(StickerActions.move($event.stID, $event.delta));
  }


}
