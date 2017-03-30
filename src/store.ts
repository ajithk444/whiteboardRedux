import {CounterActions} from "./app/app.actions";
import {WhiteboardActions} from "./app/whiteboard/whiteboard.actions";
import {StickerActions} from "./app/sticker/sticker.actions";
import {ISticker} from "./app/sticker/sticker.interface";
import {IPoint} from "./app/helpers/point.interface";

export interface MyAction {
  type: string,
  payload: any,
}


export interface IAppState {
  count: number;

  // Steering MouseHandling:
  mouseDown: IPoint;

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

  mouseDown: null,

  // Intial value for the Whiteboard Component
  wbTitle: 'My Whiteboard 01',
  wbWidth: 500,

  wbHeight: 300,
  // End of Whiteboard
  stickers: [
    {
      stID: 1,
      stSelected: false,
      stTitle: "Sticker 1",
      stLeft: 10,
      stTop: 10,
      stWidth: 200,
      stHeight: 100,
      stText: "Here we go! :-)"
    },
    {
      stID: 2,
      stSelected: false,
      stTitle: "Sticker 2",
      stLeft: 100,
      stTop: 40,
      stWidth: 200,
      stHeight: 100,
      stText: "Here we go 2! :-)"
    }
  ],
};

export function rootReducer(lastState: IAppState, action: MyAction) {
  let result: any;
  switch(action.type) {
    case CounterActions.INCREMENT:
      return Object.assign({}, lastState, {count: lastState.count + 1});
    case CounterActions.DECREMENT:
      if( lastState.count > 0)
        return Object.assign({}, lastState, {count: lastState.count - 1});
    break;
    // *** Whiteboard actions: **
    case WhiteboardActions.WB_INCREASE_WIDTH:
      return Object.assign({}, lastState, {wbWidth: lastState.wbWidth + action.payload});

    case WhiteboardActions.WB_INCREASE_HEIGTH:
      return Object.assign({}, lastState, {wbHeight: lastState.wbHeight + action.payload});

    // ************************
    // *** Sticker actions: ***
    // ************************
    case StickerActions.ST_TOGGLE_SELECTED:
      //console.log("toggleSelected " + JSON.stringify(action.payload));
      result = lastState.stickers.map((sticker:ISticker) => {
        return (sticker.stID === action.payload.stID)
                ? Object.assign({}, sticker, {stSelected: !sticker.stSelected})
                : sticker;
        });
      return Object.assign({}, lastState, {stickers: result}, {mouseDown: action.payload.pos});

    case StickerActions.ST_MOVE:
      //console.log("move payload" +  JSON.stringify(action.payload));
      result = lastState.stickers.map((sticker:ISticker) => {
        if (sticker.stID !== action.payload.stID) {
          return sticker;
        }
        let help = {
          stLeft: sticker.stLeft + action.payload.delta.x - lastState.mouseDown.x,
          stTop: sticker.stTop  + action.payload.delta.y - lastState.mouseDown.y
        };
        return Object.assign({}, sticker, help);
      });
      return Object.assign({}, lastState, {stickers: result}, {mouseDown: action.payload.delta});
    default:
      return lastState;
  } // of switch(action.type).
  // Always return the current state for unkown actions!
  return lastState;
}
