import * as actions from "./giftsAction";

const getAllCountriesByApi = new Promise((resolve, reject) => {
  // do you business normal here as normaly
});

describe("test that all actions methods have been created successfully", () => {
  it("creates an action to add a gift/methodName:addGift/no params", () => {
    const expectedAction = { type: "ADD_GIFT" };

    expect(actions.addGift()).toEqual(expectedAction);
  });

  it("creates an action to delete a gift/methodName:deleteGift/params:id", () => {
    const id = 0;

    const expectedAction = { type: "DELETE_GIFT", payload: id };

    expect(actions.deleteGift(id)).toEqual(expectedAction);
  });

  it("creates an action to reset a gift/methodName:resetGift/params:id", () => {
    const id = 0;

    const expectedAction = { type: "RESET_GIFTS" };

    expect(actions.resetGift(id)).toEqual(expectedAction);
  });

  it("creates an action to set the gift's person/methodName:addPerson/params:person,id", () => {
    const person = "hedi";
    const id = 0;
    const expectedAction = {
      type: "ADD_PERSON",
      payload: person,
      meta: id,
    };

    expect(actions.addPerson(person, id)).toEqual(expectedAction);
  });

  it("creates an action to set the gift's present/methodName:addPresent/params:present,id", () => {
    const present = "chocolat";
    const id = 0;

    const expectedAction = {
      type: "ADD_PRESENT",
      payload: present,
      meta: id,
    };

    expect(actions.addPresent(present, id)).toEqual(expectedAction);
  });

  it("creates an action to get all countries by api", () => {
    const expectedAction = {
      type: "GET_COUNTRIES",
      payload: getAllCountriesByApi,
    };

    expect(actions.getAllCountriesAction()).toEqual(expectedAction);
  });

  it("creates an action to change state of selected countrie/methodName:setCountrieSelectedAction/params:countrie", () => {
    const countrie = "test";
    const expectedAction = {
      type: "SET_COUNTRIE",
      payload: countrie,
    };

    expect(actions.setCountrieSelectedAction(countrie)).toEqual(expectedAction);
  });
});
