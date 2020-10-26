import { getCountriesArrayToDisplay } from "./selectCountries";

describe("reformat the countries array", () => {
  it("taks as entry an empty array, expect an empty array output aswell", () => {
    const state = {
      countries: [],
    };

    expect(getCountriesArrayToDisplay(state)).toEqual([]);
  });

  it("returns the array(length 1) with only names of countries", () => {
    const state = {
      countries: [
        {
          name: "Afghanistan",
          topLevelDomain: [".af"],
          alpha2Code: "AF",
          alpha3Code: "AFG",
        },
      ],
    };

    expect(getCountriesArrayToDisplay(state)).toEqual(["Afghanistan"]);
  });

  it("returns the array(length 2) with only names of countries", () => {
    const state = {
      countries: [
        {
          name: "Afghanistan",
          topLevelDomain: [".af"],
          alpha2Code: "AF",
          alpha3Code: "AFG",
        },
        {
          name: "Algeria",
          topLevelDomain: [".dz"],
          alpha2Code: "DZ",
          alpha3Code: "DZA",
        },
      ],
    };

    expect(getCountriesArrayToDisplay(state)).toEqual([
      "Afghanistan",
      "Algeria",
    ]);
  });
});
