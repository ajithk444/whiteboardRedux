/**
 * Created by eller on 13.03.17.
 */

import {Injectable} from "@angular/core";
import {MyAction} from "../../store";

@Injectable()
export class WhiteboardActions {
  static WB_INCREASE_WIDTH = "WB_INCREASE_WIDTH";
  static WB_INCREASE_HEIGTH = "WB_INCREASE_HEIGHT";
  static WB_ADD_NEW_STICKER = "WB_ADD_NEW_STICKER";

  static increaseWidth(width: number): MyAction {
    return {type: this.WB_INCREASE_WIDTH, payload: width};
  }

  static increaseHeight(height: number): MyAction {
    return {type: this.WB_INCREASE_HEIGTH, payload: height};
  }

  static addNewSticker(): MyAction {
    return {type: this.WB_ADD_NEW_STICKER, payload: null};
  }
}
