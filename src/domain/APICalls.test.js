import axios from "axios";

import { getAllCountriesByApi } from "./APICalls";

jest.mock("axios");
const apiUrl = "https://restcountries.eu/rest/v2/all";

describe("get all countries", () => {
  it("fetches successfully all countries data from an API", async () => {
    const countries = {
      data: {
        countries: [
          {
            name: "Afghanistan",
            capital: "Kabul",
            alpha2Code: "AF",
          },
          {
            name: "Tunisia",
            capital: "Tunis",
            alpha2Code: "TN",
          },
        ],
      },
    };

    axios.get.mockResolvedValue(countries);
    await expect(getAllCountriesByApi()).resolves.toEqual(countries);
    expect(axios.get).toHaveBeenCalledWith(apiUrl);
  });

  it("fetches erroneously countries from my API", async () => {
    const errorMessage = "Network Error";

    axios.get.mockRejectedValue(new Error(errorMessage));

    await expect(getAllCountriesByApi()).rejects.toThrow(errorMessage);
    expect(axios.get).toHaveBeenCalledWith(apiUrl);
  });
});
