const location_form = document.querySelector("form");
const updateCity = async (city) => {
  const cityDets = await getCity(city);
  const cityWeather = await getConditions(cityDets["Key"]);
  return {
    cityDets,
    cityWeather,
  };
  // Both the above and below is the same
  // return {
  //   cityDets: cityDets,
  //   cityWeather: cityWeather,
  // };
};
location_form.addEventListener("submit", (e) => {
  e.preventDefault();
  const city = location_form.city.value.trim();
  location_form.reset();
  // update the ui with the new city
  updateCity(city)
    .then((data) => {
      console.log(data);
    })
    .catch((error) => {
      alert(error);
    });
});
