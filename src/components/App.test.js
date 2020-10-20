import React from "react";
import configureStore from "redux-mock-store";
import { Provider } from "react-redux";
import renderer from "react-test-renderer";
import * as actions from "../actions/giftsAction";
import App from "./App";

const mockStore = configureStore([]);

describe("App connected to redux store", () => {
  let initialState = { gifts: [] };
  let app;

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
    beforeEach(() => {
      app.root.findByType("button").props.onClick();
    });

    it("expect call with actions", () => {
      expect(store.dispatch).toHaveBeenCalledWith(actions.addGift());
    });
  });
});
