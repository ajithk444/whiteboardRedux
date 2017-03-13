/**
 * Created by eller on 13.03.17.
 */

import {Injectable} from "@angular/core";
import { Action } from 'redux';

@Injectable()
export class WhiteboardActions {
  static WB_INCREASE_WIDTH = "WB_INCREASE_WIDTH";
  static WB_INCREASE_HEIGTH = "wB_INCREASE_HEIGHT";

  static increaseWidth(): Action {
    return {type: this.WB_INCREASE_HEIGTH};
  }

  static increaseHeight(): Action {
    return {type: this.WB_INCREASE_HEIGTH};
  }
}
