"use strict";

import { updateWeatherInfo } from "./current-weather";
import { updateWeeklyForecast } from "./weekly-forecast";
import { updateHumidity } from "./humidity";
import { getHourlyForecast, updateHourlyForecast } from "./hourly-forecast";

const apiKey = "X5Sip7uKIkUGYS3EZUnarLLlYZRdRWAg";
const searchQueryInput = document.getElementById("searchQuery");
const searchButton = document.getElementById("searchButton");

async function fetchWeatherData(searchQuery) {
  try {
    // First, fetch the location key based on the search query
    const locationUrl = `http://dataservice.accuweather.com/locations/v1/cities/search?apikey=${apiKey}&q=${encodeURIComponent(
      searchQuery
    )}`;
    const locationResponse = await fetch(locationUrl);

    if (!locationResponse.ok) {
      throw new Error("Network response was not ok");
    }

    const locations = await locationResponse.json();

    if (locations.length === 0) {
      console.error("No locations found for the search query");
      return;
    }

    const locationKey = locations[0].Key;
    console.log(locations);

    // Now, fetch the weather data for the location key
    const weatherUrl = `http://dataservice.accuweather.com/forecasts/v1/daily/5day/${locationKey}?apikey=${apiKey}&details=true`;
    const weatherResponse = await fetch(weatherUrl);

    if (!weatherResponse.ok) {
      throw new Error("Network response was not ok");
    }

    // Fetch hourly weather data for the location key
    const hourlyWeatherUrl = `http://dataservice.accuweather.com/forecasts/v1/hourly/12hour/${locationKey}?apikey=${apiKey}`;
    const hourlyWeatherResponse = await fetch(hourlyWeatherUrl);

    if (!hourlyWeatherResponse.ok) {
      throw new Error("Network response was not ok");
    }

    const hourlyWeatherData = await hourlyWeatherResponse.json();
    console.log(hourlyWeatherData);

    const weatherData = await weatherResponse.json();
    weatherData.location = locations[0];

    console.log(weatherData);
    // Update Weather Elements Display
    updateWeatherInfo(weatherData);
    updateWeeklyForecast(weatherData);
    updateHumidity(weatherData);
    updateHourlyForecast(hourlyWeatherData);

  } catch (error) {
    console.error("There was a problem with the fetch operation:", error);
  }
}

searchButton.addEventListener("click", () => {
  const searchQuery = searchQueryInput.value; // Get the user's input
  fetchWeatherData(searchQuery);
});
fetchWeatherData("Chicago");
