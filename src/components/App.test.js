import React from "react";
import { shallow } from "enzyme"; //shallow allow us to mock the render portion of a component; meaning inner childs of app for ex arent rendred fully
import App from "./App";

const app = shallow(<App />);

describe("App", () => {
  it("renders normally", () => {
    expect(app).toMatchSnapshot(); // the snapshot follows the changes that occur on a component, and tells us if there is a change between actual and previous
  });

  it("initialise gifts state", () => {
    expect(app.state().gifts).toEqual([]);
  });

  describe("when clicking the add gift button", () => {
    // executed before each of the it of this describe
    beforeEach(() => {
      app.find(".btn-add").simulate("click");
    });
    //  executed after each of the it of this describe to remove test pollution (so that one it doesnt effect the other)
    afterEach(() => {
      app.setState({ gifts: [] });
    });

    it("add a giftto state", () => {
      expect(app.state().gifts).toEqual([{ name: "gift1", id: 0 }]);
    });

    it("add a new gift to the rendered list ", () => {
      expect(app.find(".gift-list").children().length).toEqual(1); // equal 2 because there is test pollution from the click of the previous test
    });
  });
});
