'use strict';

export const updateWeeklyForecast = (weatherData) => {
    const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
  
    for (let i = 1; i <= 4; i++) {
      const forecastDay = document.getElementById(`forecastDay${i}`);
      const forecastData = weatherData.DailyForecasts[i];
  
      const weekdayElement = forecastDay.querySelector('.weekly-forecast__weekday');
      const conditionElement = forecastDay.querySelector('.weekly-forecast__condition');
      const degreesElement = forecastDay.querySelector('.weekly-forecast__degrees');
      const iconElement = forecastDay.querySelector('.weekly-forecast__icon');
  
      const date = new Date(forecastData.Date);
      const dayName = days[date.getDay()];
  
      weekdayElement.textContent = dayName;
      conditionElement.textContent = forecastData.Day.IconPhrase;
      degreesElement.textContent = `${forecastData.Temperature.Minimum.Value}° Low / ${forecastData.Temperature.Maximum.Value}° High`;
  
      const weatherIcon = getWeatherIcon(forecastData.Day.IconPhrase);
      iconElement.className = `weekly-forecast__icon wi ${weatherIcon}`;
    }
  };
  
  export const getWeatherIcon = (iconPhrase) => {
    const phrase = iconPhrase.toLowerCase();
  
    if (phrase.includes('sunny') || phrase.includes('clear')) {
      return phrase.includes('night') ? 'wi-night-clear' : 'wi-day-sunny';
    }
    if (phrase.includes('cloudy') || phrase.includes('intermittent') || phrase.includes('partly')) {
      return phrase.includes('night') ? 'wi-night-alt-cloudy' : 'wi-day-cloudy';
    }
    if (phrase.includes('rain') || phrase.includes('showers')) {
      return 'wi-rain';
    }
    if (phrase.includes('snow') || phrase.includes('flurries')) {
      return 'wi-snow';
    }
    if (phrase.includes('sleet') || phrase.includes('ice')) {
      return 'wi-sleet';
    }
    if (phrase.includes('wind') || phrase.includes('breezy')) {
      return 'wi-windy';
    }
    if (phrase.includes('fog') || phrase.includes('hazy')) {
      return 'wi-fog';
    }
    return ''; // Fallback if no matching condition is found
  };
  