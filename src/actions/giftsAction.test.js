import * as constants from "./constants";
import * as actions from "./giftsAction";
import { getAllCountriesByApi } from "../domain/APICalls";

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

it("creates an action to set the gift's person", () => {
  const person = "hedi";
  const id = 0;
  const expectedAction = {
    type: constants.ADD_PERSON,
    payload: person,
    meta: id,
  };

  expect(actions.addPerson(person, id)).toEqual(expectedAction);
});

it("creates an action to set the gift's present", () => {
  const present = "chocolat";
  const id = 0;

  const expectedAction = {
    type: constants.ADD_PRESENT,
    payload: present,
    meta: id,
  };

  expect(actions.addPresent(present, id)).toEqual(expectedAction);
});

it("creates an action to get all countries by api", () => {
  const expectedAction = {
    type: constants.GET_COUNTRIES,
    payload: getAllCountriesByApi(),
  };

  expect(actions.getAllCountriesAction()).toEqual(expectedAction);
});
