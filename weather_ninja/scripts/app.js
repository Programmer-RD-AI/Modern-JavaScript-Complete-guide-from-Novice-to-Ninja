const card = document.querySelector(".card");
const details = document.querySelector(".details");
const location_form = document.querySelector("form");
const updateUI = (data) => {
  const cityDets = data.cityDets;
  const cityWeather = data.cityWeather;
  details.innerHTML = `
  <h5 class="my-3">${cityDets['EnglishName']}</h5>
          <div class="my-3">Weather Condition</div>
          <div class="display-4 my-4">
            <span>temp</span>
            <span>&deg;C</span>
          </div>`;
};

const updateCity = async (city) => {
  const cityDets = await getCity(city);
  const cityWeather = await getConditions(cityDets["Key"]);
  return {
    cityDets,
    cityWeather,
  };
};
location_form.addEventListener("submit", (e) => {
  e.preventDefault();
  const city = location_form.city.value.trim();
  location_form.reset();
  // update the ui with the new city
  updateCity(city)
    .then((data) => {
      updateUI(data);
    })
    .catch((error) => {
      alert(error);
    });
});
