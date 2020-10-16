import React from "react";
import { shallow } from "enzyme";
import Gift from "./Gift";

describe("Gift", () => {
  const gift = shallow(<Gift />);

  it("renders properly", () => {
    expect(gift).toMatchSnapshot(); // the snapshot follows the changes that occur on a component, and tells us if there is a change between actual and previous
  });

  it("initialises a person and a present and drop down list of countries in our state", () => {
    expect(gift.state().person).toEqual("");
    expect(gift.state().gift).toEqual("");
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
});
