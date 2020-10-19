import * as constants from "./constants";
import * as actions from "./giftsAction";

it("creates an action to add a gift", () => {
  const gift = {};

  const expectedAction = { type: constants.ADD_GIFT, payload: gift };

  expect(actions.addGift(gift)).toEqual(expectedAction);
});

it("creates an action to delete a gift", () => {
  const id = 0;

  const expectedAction = { type: constants.DELETE_GIFT, payload: id };

  expect(actions.deleteGift(id)).toEqual(expectedAction);
});
