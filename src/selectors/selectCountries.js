import { createSelector } from "reselect";

const getCountries = (state) => state.countries;

// eslint-disable-next-line import/prefer-default-export

export const getCountriesArrayToDisplay = createSelector(
  [getCountries],
  (countries) => {
    const arrTen = [];
    if (countries) {
      for (var k = 0; k < countries.length; k++) {
        arrTen.push(countries[k].name);
      }
    } else {
      arrTen.push("loading");
	}
	return arrTen;
  }
);
