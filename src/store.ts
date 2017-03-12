import { Action } from 'redux';
import {CounterActions} from "./app/app.actions";
/**
 * Created by eller on 09.03.17.
 */

export interface IAppState {
  count: number;
  // Steering the Whiteboard Component
  wbTitle: string;
  wbWidth: number;
  wbHeight: number;
  // End of WhiteBoard
}

export const INITIAL_STATE: IAppState = {
  count: 0,
  // Intial value for the Whiteboard Component
  wbTitle: 'My Whiteboard 01',
  wbWidth: 500,
  wbHeight: 300,
  // End of Whiteboard
};

export function rootReducer(lastState: IAppState, action: Action) {
  switch(action.type) {
    case CounterActions.INCREMENT:
      return Object.assign({}, lastState, {count: lastState.count + 1});
    case CounterActions.DECREMENT:
      if( lastState.count > 0)
        return Object.assign({}, lastState, {count: lastState.count - 1});
  }
  // Always return the current state for unkown actions!
  return lastState;
}
