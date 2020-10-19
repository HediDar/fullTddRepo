import * as constants from "./constants";
import * as actions from "./giftsAction";

it("creates an action to add a gift", () => {
  const expectedAction = { type: constants.ADD_GIFT };

  expect(actions.addGift()).toEqual(expectedAction);
});

it("creates an action to delete a gift", () => {
  const id = 0;

  const expectedAction = { type: constants.DELETE_GIFT, payload: id };

  expect(actions.deleteGift(id)).toEqual(expectedAction);
});

it("creates an action to reset a gift", () => {
  const id = 0;

  const expectedAction = { type: constants.RESET_GIFTS };

  expect(actions.resetGift(id)).toEqual(expectedAction);
});
