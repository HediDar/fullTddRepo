import React from "react";
import { shallow } from "enzyme";
import { Gift } from "./Gift";

describe("Gift", () => {
  const id = 0;
  const mockAddPerson = jest.fn();
  const mockAddPresent = jest.fn();
  const mockRemove = jest.fn();
  const mockCountries = jest.fn();

  const props = {
    gift: { id },
    addPerson: mockAddPerson,
    addPresent: mockAddPresent,
    onDelete: mockRemove,
    getAllCountriesAction: mockCountries,
  };
  const gift = shallow(<Gift {...props} />);

  it("renders properly", () => {
    expect(gift).toMatchSnapshot(); // the snapshot follows the changes that occur on a component, and tells us if there is a change between actual and previous
  });

  //   describe("testing the drop down list", () => {
  //     it("the drop down got 3 items", () => {

  // console.log(gift.instance());

  //       // console.log(gift.find(".mySelect").at(0).value);
  //       // console.log(gift.instance().find(".mySelect").props().value);

  //       //  console.log(gift.root.find(".mySelect").at(0).instance());
  //       //expect(gift.find(".mySelect").props().value).toBe('a');

  //       // expect(gift.find(".mySelect").at(0).value).toEqual("a");
  //       // expect(gift.find(".mySelect").at(1).value).toEqual("b");
  //       // expect(gift.find(".mySelect").at(2).value).toEqual("c");
  //     });
  //   });

  describe("when typing into the person input", () => {
    const personTest = "uncle";
    beforeEach(() => {
      gift
        .find(".input-person")
        .simulate("change", { target: { value: personTest } });
    });
    it("updates person in state", () => {
      expect(mockAddPerson).toHaveBeenCalledWith(
        personTest,
        gift.instance().props.gift.id
      );
    });
  });

  describe("when typing into the present input", () => {
    const presentTest = "watch";
    beforeEach(() => {
      gift
        .find(".input-present")
        .simulate("change", { target: { value: presentTest } });
    });
    it("updates person in state", () => {
      expect(mockAddPresent).toHaveBeenCalledWith(
        presentTest,
        gift.instance().props.gift.id
      );
    });
  });

  describe("delete button click", () => {
    beforeEach(() => {
      gift.find(".btn-delete").simulate("click");
    });

    it("calls the removeGift callback", () => {
      expect(mockRemove).toHaveBeenCalledWith(gift.instance().props.gift.id);
    });
  });
});
