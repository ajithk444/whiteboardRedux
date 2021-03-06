import { Injectable } from '@angular/core';
import { NgRedux } from "@angular-redux/store";
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';
import { ISticker } from "./sticker.interface";
import { StickerActions } from "./sticker.actions";
import { MyAction, IAppState } from "../../store";

@Injectable()
export class StickerService {
  newStId: number = 0;
  fSticker: FirebaseListObservable<ISticker[]>;

  constructor(private store: NgRedux<IAppState>, private db: AngularFireDatabase) {
    this.fSticker = db.list('/stickers');
    this.fSticker.subscribe(stickers => {
      stickers.forEach(s => this.store.dispatch(StickerActions.addSticker(s)));
    });
  }

  initService () {
    let stickers: Array<ISticker> = [
        {
          stID: 1,
          stSelected: false,
          stEditable: false,
          stTitle: "Sticker 1",
          stLeft: 10,
          stTop: 10,
          stWidth: 200,
          stHeight: 100,
          stText: "Here we go! :-)"
        },
        {
          stID: 2,
          stSelected: false,
          stEditable: false,
          stTitle: "Sticker 2",
          stLeft: 100,
          stTop: 40,
          stWidth: 200,
          stHeight: 100,
          stText: "Here we go 2! :-)"
        }
      ];

    stickers.map(sticker => {
      this.store.dispatch(StickerActions.addSticker(sticker));
    });
    this.newStId = 3;
  } // of initService().

  action(myAction: MyAction) {
    this.store.dispatch(myAction);
  }

  newSticker() {

    let s:ISticker = {
      stID: this.newStId,
      stSelected: false,
      stEditable: false,
      stTitle: "Sticker " + this.newStId,
      stLeft: 10,
      stTop: 10,
      stWidth: 200,
      stHeight: 100,
      stText: "Here we go! :-)"
    };
    this.action(StickerActions.addSticker(s));
    this.newStId++;
  }
}

