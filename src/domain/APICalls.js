import axios from "axios";

export  function getAllCountriesByApi() {
  return axios.get("https://restcountries.eu/rest/v2/all");
}
