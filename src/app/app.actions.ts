/**
 * Created by eller on 09.03.17.
 */

import {Injectable} from "@angular/core";
import { Action } from 'redux';

@Injectable()
export class CounterActions {
  static INCREMENT = "INCREMENT";
  static DECREMENT = "DECREMENT";

  static increment(): Action {
    return { type: CounterActions.INCREMENT};
  }

  static decrement(): Action {
    return { type: CounterActions.DECREMENT};
  }
}
