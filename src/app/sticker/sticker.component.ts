
import {Component, OnInit, Input, HostListener, EventEmitter, Output} from '@angular/core';
import {ISticker} from "./sticker.interface";
import {IPoint} from "../helpers/point.interface";
import {MyAction} from "../../store";
import {StickerActions} from "./sticker.actions";

@Component({
  selector: 'ellzap-sticker',
  templateUrl: './sticker.component.html',
  styleUrls: ['./sticker.component.css']
})
export class StickerComponent implements OnInit {

  @Input() sticker: ISticker;
  @Output() myAction: EventEmitter<MyAction> = new EventEmitter<MyAction>();
  newText: String;

  //@HostListener('mousedown', ['$event'])  onMouseDown(event: any) {
  // WorkARound: The mousedown event is blocking the click-event we need for the toolbar!
  // So I set this event on the other parts exect the toolbar directly!
  onMouseDown(event: any) {
    if (!(this.sticker.stSelected)) {
      //console.log(JSON.stringify(event));
      const pos: IPoint = {
        x: event.clientX,
        y: event.clientY,
      };
      // !!! this emit kills the scope of this and result in no chances to the component !!!
      this.myAction.emit(StickerActions.toggleSelected(this.sticker.stID, pos));
    }
  }; // of @HostListener('mousedown', ['$event']) onMouseDown(event: any).

  @HostListener('mouseup', ['$event']) onMouseUp() {
    //console.log(JSON.stringify(event));
    if (this.sticker.stSelected) {
      this.myAction.emit(StickerActions.toggleSelected(this.sticker.stID, null));
    }
  }; // of @HostListener('mouseup', ['$event']) onMouseUp(event: any).

  @HostListener('mousemove', ['$event']) onMouseMove(event: any) {
    if (this.sticker.stSelected) {
      const pos = {
        x: event.clientX,
        y: event.clientY,
      };
      this.myAction.emit(StickerActions.move(this.sticker.stID, pos));
    }
  } // of @HostListener('mousemouve', ['$event']) onMouseMove(event: any).

  // Toolbar actions
  onDeleteClick() {
    this.myAction.emit(StickerActions.del(this.sticker.stID));
  }

  onEditClick() {
    //console.log("onEditClick()");
    this.newText = this.sticker.stText;
    this.myAction.emit(StickerActions.edit(this.sticker.stID));
  }

  onCancelEdit() {
    //console.log("onCancelEdit()");
    this.myAction.emit(StickerActions.cancelEdit(this.sticker.stID));
  }

  onSaveEdit() {
    //console.log("onSaveEdit()");
    this.myAction.emit(StickerActions.save(this.sticker.stID, this.newText));
  }

  constructor() {}

  ngOnInit() {
    //console.log("Im here :-)");
    this.newText = this.sticker.stText;
  }
}

