import { Action } from 'redux';
import {CounterActions} from "./app/app.actions";
/**
 * Created by eller on 09.03.17.
 */

export interface IAppState {
  count: number;
}

export const INITIAL_STATE: IAppState = {
  count: 0,
};

export function rootReducer(lastState: IAppState, action: Action) {
  switch(action.type) {
    case CounterActions.INCREMENT:
      return { count: lastState.count + 1};
    case CounterActions.DECREMENT:
      if( lastState.count > 0)
        return { count: lastState.count - 1};
  }
  // Always return the current state for unkown actions!
  return lastState;
}
