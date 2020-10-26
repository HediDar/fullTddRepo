//import axios from "axios";

// export  function getAllCountriesByApi() {
//   return axios.get("https://restcountries.eu/rest/v2/all");
// }

// export default ({axios})=>({return axios.get("https://restcountries.eu/rest/v2/all");})

export default ({ axios }) => ({
  getAllCountriesByApi() {
    return axios.get("https://restcountries.eu/rest/v2/all");
  },
});
