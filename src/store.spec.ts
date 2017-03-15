/**
 * Created by eller on 15.03.17.
 */

import {rootReducer, INITIAL_STATE} from "./store";
import {WhiteboardActions} from "./app/whiteboard/whiteboard.actions";


describe('Pure rootReducer testing', () => {

  it('Increasing the whiteboard size', () => {
    let wbWidth = INITIAL_STATE.wbWidth;
    [1, 2, -20, +20, 30, -30].map((x) => {
      let result = rootReducer(INITIAL_STATE, WhiteboardActions.increaseWidth(x));
      expect(result.wbWidth).toBe(wbWidth + x);
    });
  });

  it('Increasing the whiteboard height', () => {
    let wbHeight= INITIAL_STATE.wbHeight;
    [1, 2, -200, +200, 313, -317].map((y) => {
      let result = rootReducer(INITIAL_STATE, WhiteboardActions.increaseHeight(y));
      expect(result.wbHeight).toBe(wbHeight + y);
    });
  })
});
