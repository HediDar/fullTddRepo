import React from "react";
import { shallow } from "enzyme";
import configureStore from "redux-mock-store";
import { Provider } from "react-redux";
import renderer from "react-test-renderer";
import * as actions from "../actions/giftsAction";
import App from "./App";
import { Button } from "react-bootstrap";

// const app = shallow(<App />);

const mockStore = configureStore([]);
const mockedFunction = jest.fn();

describe("App connected to redux store", () => {
  let initialState = { gifts: [] };
  let app;
  // const mockedFunction = {
  //   addGift: jest.fn(),
  // };

  let store = mockStore(initialState);

  beforeEach(() => {
    store = mockStore(initialState);
    store.dispatch = jest.fn();

    app = renderer.create(
      <Provider store={store}>
        <App />
      </Provider>
    );
  });

  it("renders normally", () => {
    expect(app.toJSON()).toMatchSnapshot(); // the snapshot follows the changes that occur on a component, and tells us if there is a change between actual and previous
  });

  describe("when clicking the add gift button", () => {
    // executed before each of the it of this describe
    const id = 0;
    beforeEach(() => {
      app.root.findByType("button").props.onClick();
    });

    it("expect call with actions", () => {
      expect(store.dispatch).toHaveBeenCalledWith(actions.addGift());
    });

    // it("add a new gift to the rendered list ", () => {
    //   expect(app.find(".gift-list").children().length).toEqual(1); // equal 2 because there is test pollution from the click of the previous test
    // });
    // it("creates a gift component", () => {
    //   expect(app.find("Gift").exists()).toBe(true);
    // });

    // describe("when the users wants to remove a gift", () => {
    //   beforeEach(() => {
    //     app.instance().removeGift(id);
    //   });
    //   it("removes the gift from our state", () => {
    //     expect(app.state().gifts).toEqual([]);
    //   });
    // });
  });
});
