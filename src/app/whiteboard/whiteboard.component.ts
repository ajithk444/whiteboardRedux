/* tslint:disable:no-unused-variable */
import {Component, OnInit} from '@angular/core';
import {select, NgRedux} from "@angular-redux/store";
import {Observable} from "rxjs";
import {WhiteboardActions} from "./whiteboard.actions";
import {IAppState} from "../../store";
import {StickerActions} from "../sticker/sticker.actions";
import {ISticker} from "../sticker/sticker.interface";
import {IPoint} from "../helpers/point.interface";

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

  constructor(private store: NgRedux<IAppState>) {};

  ngOnInit() {

  }

  // *** normal functions: ***

  // *** WB Actions: ***
  heightPlus() {
    this.store.dispatch(WhiteboardActions.increaseHeight(10));
  }
  heightMinus() {
    this.store.dispatch(WhiteboardActions.increaseHeight(-10));
  }

  widthPlus() {
    this.store.dispatch(WhiteboardActions.increaseWidth(10));
  }
  widthMinus() {
    this.store.dispatch(WhiteboardActions.increaseWidth(-10));
  }

  // *** Sticker Actions: ***
  addNewSticker() {
    this.store.dispatch(WhiteboardActions.addNewSticker());
  }


  stickerSelected($event:{stID:number, pos:IPoint}){
    this.store.dispatch(StickerActions.toggleSelected($event.stID, $event.pos));
  }

  stickerMove($event:{stID:number, delta:IPoint}) {
    this.store.dispatch(StickerActions.move($event.stID, $event.pos));
  }



}
