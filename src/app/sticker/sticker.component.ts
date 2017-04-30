
import {Component, OnInit, Input, HostListener, EventEmitter, Output} from '@angular/core';
import {ISticker} from "./sticker.interface";
import {IPoint} from "../helpers/point.interface";

@Component({
  selector: 'ellzap-sticker',
  templateUrl: './sticker.component.html',
  styleUrls: ['./sticker.component.css']
})
export class StickerComponent implements OnInit {

  @Input() sticker: ISticker;
  @Output() selected: EventEmitter<{stID: number, pos: IPoint}> = new EventEmitter<{stID: number, pos: IPoint}>();
  @Output() movement: EventEmitter<{stID: number, pos: IPoint}> = new EventEmitter<{stID: number, pos: IPoint}>();
  @Output() deleteMe: EventEmitter<{stID: number}> = new EventEmitter<{stID: number}>();

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
      this.selected.emit({stID: this.sticker.stID, pos: pos});
      //this.sendSelected(this.sticker.stID);
    }
    return false;
  }; // of @HostListener('mousedown', ['$event']) onMouseDown(event: any).

  @HostListener('mouseup', ['$event']) onMouseUp() {
    //console.log(JSON.stringify(event));
    if (this.sticker.stSelected) {
      this.selected.emit({stID: this.sticker.stID, pos:null})
      ;
    }
    return false;
    //event.propagate();
  }; // of @HostListener('mouseup', ['$event']) onMouseUp(event: any).

  @HostListener('mousemove', ['$event']) onMouseMove(event: any) {
    if (this.sticker.stSelected) {
      const pos = {
        x: event.clientX,
        y: event.clientY,
      };
      this.movement.emit({stID: this.sticker.stID, pos: pos})
    }
  } // of @HostListener('mousemouve', ['$event']) onMouseMove(event: any).

  // Toolbar actions
  onDeleteClick() {
    //console.log("*** Deleted clicked on stID " + this.sticker.stID);
    this.deleteMe.emit({stID: this.sticker.stID});
  }

  constructor() {}

  ngOnInit() {
    //console.log("Im here :-)");

  }
}

