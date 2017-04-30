import {Injectable} from "@angular/core";
import {MyAction} from "../../store";
import {IPoint} from "../helpers/point.interface";

@Injectable()
export class StickerActions {
  static ST_TOGGLE_SELECTED = "ST_TOOGLE_SELECTED";
  static ST_MOVE = "ST_MOVE";
  static ST_DELETE = "ST_DELETE";

  static toggleSelected(stID: number, pos: IPoint): MyAction {
    return {type: this.ST_TOGGLE_SELECTED, payload: {stID: stID, pos: pos}};
  }

  static move(stID: number, delta: IPoint): MyAction {
    return {type: this.ST_MOVE,
            payload: {stID: stID, delta: delta}
    };
  }

  static del(stID: number): MyAction {
    return {type: this.ST_DELETE, payload: {stID: stID}};
  }

}
