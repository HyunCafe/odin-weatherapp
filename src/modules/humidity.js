'use strict';

export const updateHumidity = (weatherData) => {
    const temperature = weatherData.DailyForecasts[0].Temperature.Maximum.Value;
    const dewPoint = weatherData.DailyForecasts[0].Temperature.Minimum.Value;
    const humidity = Math.round(100 * (Math.exp((17.625 * dewPoint) / (243.04 + dewPoint)) / Math.exp((17.625 * temperature) / (243.04 + temperature))));
    
    const humidityElement = document.getElementById("humidity");
    humidityElement.textContent = `${humidity}%`;
  };
  