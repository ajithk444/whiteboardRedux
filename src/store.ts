import {WhiteboardActions} from "./app/whiteboard/whiteboard.actions";
import {StickerActions} from "./app/sticker/sticker.actions";
import {ISticker} from "./app/sticker/sticker.interface";
import {IPoint} from "./app/helpers/point.interface";

export interface MyAction {
  type: string,
  payload: any,
}


export interface IAppState {

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
      stEditable: false,
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
      stEditable: false,
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
    // ***************************
    // *** Whiteboard actions: ***
    // ***************************
    case WhiteboardActions.WB_INCREASE_WIDTH:
      return Object.assign({}, lastState, {wbWidth: lastState.wbWidth + action.payload});

    case WhiteboardActions.WB_INCREASE_HEIGTH:
      return Object.assign({}, lastState, {wbHeight: lastState.wbHeight + action.payload});

    case WhiteboardActions.WB_ADD_NEW_STICKER:
        let newStId = 0;
        lastState.stickers.forEach(st => newStId = newStId < st.stID ? st.stID : newStId);
        newStId++;
        let s:ISticker = {
          stID: newStId,
          stSelected: false,
          stEditable: false,
          stTitle: "Sticker " + newStId,
          stLeft: 10,
          stTop: 10,
          stWidth: 200,
          stHeight: 100,
          stText: "Here we go! :-)"
        };
      return Object.assign({}, lastState, {stickers: [...lastState.stickers, s]});
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
          stLeft: sticker.stLeft + action.payload.pos.x - lastState.mouseDown.x,
          stTop: sticker.stTop  + action.payload.pos.y - lastState.mouseDown.y
        };
        // *** Limit move to the whiteboard: ***
        help.stLeft = help.stLeft < 0 ? 0 : help.stLeft;
        help.stLeft = help.stLeft + sticker.stWidth > lastState.wbWidth
                        ? lastState.wbWidth - sticker.stWidth
                        : help.stLeft;

        help.stTop = help.stTop < 0 ? 0 : help.stTop;
        help.stTop = help.stTop + sticker.stHeight > lastState.wbHeight
                        ? lastState.wbHeight - sticker.stHeight
                        : help.stTop;

        //console.log("help === " + JSON.stringify(help));
        return Object.assign({}, sticker, help);
      });
      return Object.assign({}, lastState, {stickers: result}, {mouseDown: action.payload.pos});

      case StickerActions.ST_DELETE:
      result = lastState.stickers.filter((sticker:ISticker) => {return (sticker.stID !== action.payload.stID);});
      return Object.assign({}, lastState, {stickers: result});

    case StickerActions.ST_EDIT:
      result = lastState.stickers.map((sticker:ISticker) => {
        return (sticker.stID === action.payload.stID)
          ? Object.assign({}, sticker, {stEditable: true})
          : sticker;
      });
      return Object.assign({}, lastState, {stickers: result});

    case StickerActions.ST_CANCEL_EDIT:
      result = lastState.stickers.map((sticker:ISticker) => {
        return (sticker.stID === action.payload.stID)
          ? Object.assign({}, sticker, {stEditable: false})
          : sticker;
      });
      return Object.assign({}, lastState, {stickers: result});

    case StickerActions.ST_SAVE_EDIT:
      result = lastState.stickers.map((sticker:ISticker) => {
        return (sticker.stID === action.payload.stID)
          ? Object.assign({}, sticker, {stEditable: false, stText: action.payload.newText})
          : sticker;
      });
      return Object.assign({}, lastState, {stickers: result});

    default:
      return lastState;
  } // of switch(action.type).
  // Always return the current state for unkown actions!
  //return lastState;
}
