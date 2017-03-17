
import { Component, OnInit } from '@angular/core';
import {select, NgRedux} from "@angular-redux/store";
import {ISticker, IAppState} from "../../store";
import {Observable} from "rxjs";

@Component({
  selector: 'ellzap-sticker',
  templateUrl: './sticker.component.html',
  styleUrls: ['./sticker.component.css']
})
export class StickerComponent implements OnInit {
  @select() readonly sticker$: Observable<ISticker>;

  constructor(private ngRedux: NgRedux<IAppState>) {}

  ngOnInit() {
    console.log("Im here :-)");
  }

}
