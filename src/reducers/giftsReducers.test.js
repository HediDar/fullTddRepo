import giftReducer from "./giftsReducers";
import * as constants from "../actions/constants";

describe("giftReducer", () => {
  it("add a gift", () => {
    const gift = { id: 0 };
    // console.log(
    //   giftReducer(undefined, { type: constants.ADD_GIFT, payload: gift })
    // );
    expect(
      giftReducer(undefined, { type: constants.ADD_GIFT, payload: gift })
    ).toEqual({ gifts: [{ id: 0 }] }); // the reducer takes two args:initial state+the action that contains the type+payload
  });

  it("delete a gift", () => {
    const id = 0;

    expect(
      giftReducer(undefined, { type: constants.DELETE_GIFT, payload: id })
    ).toEqual({ gifts: [] }); // the reducer takes two args:initial state+the action that contains the type+payload
  });
});
