/* tslint:disable:no-unused-variable */
import {Component, OnInit} from '@angular/core';
import {select, NgRedux} from "@angular-redux/store";
import {Observable} from "rxjs";
import {WhiteboardActions} from "./whiteboard.actions";
import {IAppState, MyAction} from "../../store";
import {ISticker} from "../sticker/sticker.interface";
import {StickerService} from "../sticker/sticker.service";

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


  constructor(private store: NgRedux<IAppState>, private stickerService: StickerService) {
/*    this.dbloggedIn$ = this.store.select("dbLoggedIn");
    this.dbloggedIn$.subscribe((x) => {
      console.log ("x ===> " + x);
      if(x) {
        this.router.navigateByUrl('/whiteboard');
      } else {
        this.error = "Login not sucessful!"
      }

    };
  */
  }


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
    this.stickerService.newSticker();
  }

  stickerAction(myAction: MyAction) {
    this.stickerService.action(myAction);
  }

}
