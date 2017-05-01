import {Injectable} from "@angular/core";
import {MyAction} from "../../store";
import {IPoint} from "../helpers/point.interface";

@Injectable()
export class StickerActions {
  static ST_TOGGLE_SELECTED = "ST_TOOGLE_SELECTED";
  static ST_MOVE = "ST_MOVE";
  static ST_DELETE = "ST_DELETE";
  static ST_EDIT = "ST_EDIT";

  static toggleSelected(stID: number, pos: IPoint): MyAction {
    return {type: this.ST_TOGGLE_SELECTED, payload: {stID: stID, pos: pos}};
  }

  static move(stID: number, pos: IPoint): MyAction {
    return {type: this.ST_MOVE,
            payload: {stID: stID, pos: pos}
    };
  }

  static del(stID: number): MyAction {
    return {type: this.ST_DELETE, payload: {stID: stID}};
  }

  static edit(stID: number): MyAction {
    return {type: this.ST_EDIT, payload: {stID: stID}};
  }

}
