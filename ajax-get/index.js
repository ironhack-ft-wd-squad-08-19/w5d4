const getDataForCountry = countryName => {
  axios
    .get(`https://restcountries.eu/rest/v2/name/${countryName}`)
    .then(response => {
      console.log(response);
      const countryDetail = response.data[0];

      document.getElementById("country-name").innerText = countryDetail.name;

      document.getElementById("country-population").innerText =
        countryDetail.population;

      document
        .getElementById("country-flag")
        .setAttribute("src", countryDetail.flag);

      console.log(countryDetail);
    });
};

document.getElementById("name").onkeyup = () => {
  let userInput = document.getElementById("name").value;
  if (userInput === "") return;
  getDataForCountry(userInput);
};

// document.querySelector("button").onclick = () => {
//   const userInput = document.getElementById("name").value;
//   getDataForCountry(userInput);
// };
