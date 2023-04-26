'use strict';

export function updateHourlyForecast(hourlyData) {
  const hourlyTimeline = document.querySelector('.hourly-forecast__timeline');
  hourlyTimeline.innerHTML = '';

  for (let i = 0; i < 12; i++) {
    const forecast = hourlyData[i];
    const time = new Date(forecast.DateTime).toLocaleTimeString('en-US', { hour: 'numeric' });
    const condition = forecast.IconPhrase;
    const degrees = Math.round(forecast.Temperature.Value);

    const hourlyForecastItem = `
      <div class="hourly-forecast__item">
        <div class="hourly-forecast__time">${time}</div>
        <div class="hourly-forecast__condition">${condition}</div>
        <div class="hourly-forecast__degrees">${degrees}°</div>
      </div>
    `;

    hourlyTimeline.insertAdjacentHTML('beforeend', hourlyForecastItem);
  }
}