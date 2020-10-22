import { getCountriesArrayToDisplay } from "./selectCountries";

describe("reformat the countries array", () => {
  it("returns the array with only names of countries", () => {
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
