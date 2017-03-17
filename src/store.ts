import {CounterActions} from "./app/app.actions";
import {WhiteboardActions} from "./app/whiteboard/whiteboard.actions";
/**
 * Created by eller on 09.03.17.
 */

export interface MyAction {
  type: string,
  payload: any,
}

export interface ISticker{
  stID: number;
  stTitle: string;
  stLeft: number;
  stTop: number;
  stWidth: number;
  stHeight: number;
  stText: string;
}

export interface IAppState {
  count: number;

  // Steering the Whiteboard Component
  wbTitle: string;
  wbWidth: number;
  wbHeight: number;
  // End of WhiteBoard

  // Steering Stickers
  stickers: Array<ISticker>;

}

export const INITIAL_STATE: IAppState = {
  count: 0,
  // Intial value for the Whiteboard Component
  wbTitle: 'My Whiteboard 01',
  wbWidth: 500,

  wbHeight: 300,
  // End of Whiteboard
  stickers: [
    {
      stID: 1,
      stTitle: "Sticker 1",
      stLeft: 10,
      stTop: 10,
      stWidth: 200,
      stHeight: 100,
      stText: "Here we go! :-)"
    }
  ],
};

export function rootReducer(lastState: IAppState, action: MyAction) {
  switch(action.type) {
    case CounterActions.INCREMENT:
      return Object.assign({}, lastState, {count: lastState.count + 1});
    case CounterActions.DECREMENT:
      if( lastState.count > 0)
        return Object.assign({}, lastState, {count: lastState.count - 1});
      break;
    case WhiteboardActions.WB_INCREASE_WIDTH:
      return Object.assign({}, lastState, {wbWidth: lastState.wbWidth+ action.payload});
    case WhiteboardActions.WB_INCREASE_HEIGTH:
      return Object.assign({}, lastState, {wbHeight: lastState.wbHeight + action.payload});

  }
  // Always return the current state for unkown actions!
  return lastState;
}
