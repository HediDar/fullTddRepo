import React from "react";
import configureStore from "redux-mock-store";
import { Provider } from "react-redux";
import renderer from "react-test-renderer";
import * as actions from "../actions/giftsAction";
import { shallow } from "enzyme";
import { App } from "./App";

describe("unit test app", () => {
  const mockAddGift = jest.fn();
  const mockRemoveGift = jest.fn();
  const props = {
    addGift: mockAddGift,
    removeGift: mockRemoveGift,
  };

  const app = shallow(<App {...props} />);

  it("renders properly", () => {
    expect(app).toMatchSnapshot(); // the snapshot follows the changes that occur on a component, and tells us if there is a change between actual and previous
  });

  describe("when clicking the add gift button", () => {
    beforeEach(() => {
      app.find(".myBTN").simulate("click");
    });

    it("expect button click to call action method:addGift()", () => {
      expect(mockAddGift).toHaveBeenCalled();
    });
  });

  describe("testing that the delee function is handled correctly", () => {
    beforeEach(() => {
      app.instance().removeGift(0);
    });

    it("expect mocked removeGift function to have been called", () => {
      expect(mockRemoveGift).toHaveBeenCalled();
    });
  });
});
// expect(mockAddPerson).toHaveBeenCalledWith(
//   personTest,
//   gift.instance().props.gift.id
// );

// const mockStore = configureStore([]);

// describe("App connected to redux store", () => {
//   let initialState = { gifts: [] };
//   let app;

//   let store = mockStore(initialState);

//   beforeEach(() => {
//     store = mockStore(initialState);
//     store.dispatch = jest.fn();

//     app = renderer.create(
//       <Provider store={store}>
//         <App />
//       </Provider>
//     );
//   });

//   it("renders normally", () => {
//     expect(app.toJSON()).toMatchSnapshot(); // the snapshot follows the changes that occur on a component, and tells us if there is a change between actual and previous
//   });

//   describe("when clicking the add gift button", () => {
//     // executed before each of the it of this describe
//     beforeEach(() => {
//       app.root.findByType("button").props.onClick();
//     });

//     it("expect call with actions", () => {
//       expect(store.dispatch).toHaveBeenCalledWith(actions.addGift());
//     });
//   });
// });
