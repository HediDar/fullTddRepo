import React from "react";
import { shallow } from "enzyme"; //shallow allow us to mock the render portion of a component; meaning inner childs of app for ex arent rendred fully
import App from "./App";

const app = shallow(<App />);

it("renders normally", () => {
  expect(app).toMatchSnapshot(); // the snapshot follows the changes that occur on a component, and tells us if there is a change between actual and previous
});

it("initialise gifts state", () => {
  expect(app.state().gifts).toEqual([]);
});

it("add a gift by button click", () => {
  app.find(".btn-add").simulate("click");
  expect(app.state().gifts).toEqual([{ name: "gift1", id: 0 }]);
});

it("add a new gift to the rendered list when clicking on add gift", () => {
  app.find(".btn-add").simulate("click");
  expect(app.find(".gift-list").children().length).toEqual(2); // equal 2 because there is test pollution from the click of the previous test
});
