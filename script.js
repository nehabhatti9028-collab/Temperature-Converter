
const form = document.getElementById("converterForm");
const temperatureInput = document.getElementById("temperature");
const unitSelect = document.getElementById("unit");
const error = document.getElementById("error");
const results = document.getElementById("results");

form.addEventListener("submit", function (event) {
  event.preventDefault();

  const value = temperatureInput.value.trim();
  const temperature = Number(value);
  const unit = unitSelect.value;

  error.textContent = "";
  results.hidden = true;

  if (value === "" || !Number.isFinite(temperature)) {
    error.textContent = "Please enter a valid numeric temperature.";
    return;
  }

  let celsius;

  if (unit === "celsius") {
    celsius = temperature;
  } else if (unit === "fahrenheit") {
    celsius = (temperature - 32) * 5 / 9;
  } else {
    celsius = temperature - 273.15;
  }

  if (celsius < -273.15) {
    error.textContent = "Invalid temperature! It cannot be below absolute zero.";
    return;
  }

  const fahrenheit = (celsius * 9 / 5) + 32;
  const kelvin = celsius + 273.15;

  document.getElementById("celsiusResult").textContent =
    celsius.toFixed(2);

  document.getElementById("fahrenheitResult").textContent =
    fahrenheit.toFixed(2);

  document.getElementById("kelvinResult").textContent =
    kelvin.toFixed(2);

  results.hidden = false;
});

document.getElementById("year").textContent = new Date().getFullYear();
