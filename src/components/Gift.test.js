import React from "react";
import { shallow } from "enzyme";
import Gift from "./Gift";

describe("Gift", () => {
  const mockRemove = jest.fn();
  const id = 0;
  const props = { gift: { id }, onDelete: mockRemove };
  const gift = shallow(<Gift {...props} />);

  it("renders properly", () => {
    expect(gift).toMatchSnapshot(); // the snapshot follows the changes that occur on a component, and tells us if there is a change between actual and previous
  });

  it("initialises a person and a present and drop down list of countries in our state", () => {
    expect(gift.state().person).toEqual("");
    expect(gift.state().present).toEqual("");
    expect(gift.state().countries).toEqual([]);
  });

  describe("when typing into the person input", () => {
    const personTest = "uncle";
    beforeEach(() => {
      gift
        .find(".input-person")
        .simulate("change", { target: { value: personTest } });
    });
    it("updates person in state", () => {
      expect(gift.state().person).toEqual(personTest);
    });
  });

  describe("when typing into the present input", () => {
    const presentTest = "smartPhone";
    beforeEach(() => {
      gift
        .find(".input-present")
        .simulate("change", { target: { value: presentTest } });
    });
    it("updates present in state", () => {
      expect(gift.state().present).toEqual(presentTest);
    });
  });

  describe("delete button click", () => {
    beforeEach(() => {
      gift.find(".btn-delete").simulate("click");
    });

    it("calls the removeGift callback", () => {
      expect(mockRemove).toHaveBeenCalledWith(id);
    });
  });
});
