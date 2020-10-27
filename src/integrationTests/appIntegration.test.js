import React from "react";
import { render, fireEvent, screen } from "./test-utils/test-utils";
import App from "../components/App";

const app = render(<App />, {
  gifts: [],
  countries: [],
  countrieSelected: "",
});

it("renders accordingly when connected to the redux store", () => {
  expect(app).toMatchSnapshot();
});

describe("testing the gift components(added or removed correctly) embedded in app component", () => {
  it("should add a gift component when addGift button is clicked, starting with an empty initial state", () => {
    const { getByText, getByTestId } = render(<App />, {
      gifts: [],
      countries: [],
      countrieSelected: "",
    });
    fireEvent.click(getByText(/add a gift/));
    expect(getByTestId("giftDiv").children.length).toEqual(1);
  });

  it("should add a gift component when addGift button is clicked, starting with a populated initial state", () => {
    const { getByText, getByTestId } = render(<App />, {
      gifts: [
        { id: 0, person: "a", present: "b" },
        { id: 1, person: "c", present: "d" },
        { id: 2, person: "e", present: "f" },
      ],
      countries: [],
      countrieSelected: "",
    });
    fireEvent.click(getByText(/add a gift/));
    expect(getByTestId("giftDiv").children.length).toEqual(4);
  });

  it("should display 3 gifts components starting with a populated initial state, and this without simulating an add click button", () => {
    const { getByTestId } = render(<App />, {
      gifts: [
        { id: 0, person: "a", present: "b" },
        { id: 1, person: "c", present: "d" },
        { id: 2, person: "e", present: "f" },
      ],
      countries: [],
      countrieSelected: "",
    });

    expect(getByTestId("giftDiv").children.length).toEqual(3);
  });

  it("should remove a gift component when removeGift method is called, starting with a populated initial state", () => {
    const { getByText, getByTestId } = render(<App />, {
      gifts: [
        { id: 0, person: "a", present: "b" },
        { id: 1, person: "c", present: "d" },
        { id: 2, person: "e", present: "f" },
      ],
      countries: [],
      countrieSelected: "",
    });
    console.log(getByTestId("0").children);
   

    

    expect(getByTestId("giftDiv").children.length).toEqual(2);
  });
});
