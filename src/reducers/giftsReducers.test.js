import giftReducer from "./giftsReducers";
import * as constants from "../actions/constants";

describe("giftReducer", () => {
  it("add a gift", () => {
    expect(giftReducer(undefined, { type: constants.ADD_GIFT })).toEqual({
      gifts: [{ id: 0 }],
    }); // the reducer takes two args:initial state+the action that contains the type+payload
  });

  it("delete a gift", () => {
    const id = 0;

    expect(
      giftReducer(undefined, { type: constants.DELETE_GIFT, payload: id })
    ).toEqual({ gifts: [] }); // the reducer takes two args:initial state+the action that contains the type+payload
  });

  it("reset gifts in the state reducer", () => {
    expect(giftReducer(undefined, { type: constants.RESET_GIFTS })).toEqual({
      gifts: [],
    }); // the reducer takes two args:initial state+the action that contains the type+payload
  });
});
