
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
  @Output() movement: EventEmitter<{stID: number, delta: IPoint}> = new EventEmitter<{stID: number, delta: IPoint}>();

  @HostListener('mousedown', ['$event'])  onMouseDown(event: any) {
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
  }; // of @HostListener('mousedown', ['$event']) onMouseDown(event: any).

  @HostListener('mouseup', ['$event']) onMouseUp = () => {
    if (this.sticker.stSelected) {
      this.selected.emit({stID: this.sticker.stID, pos:null});
    }
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

  //constructor(private ngRedux: NgRedux<IAppState>) {}
  constructor() {}

  ngOnInit() {
    //console.log("Im here :-)");

  }
}

