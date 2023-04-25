'use strict';

export const updateWeatherInfo = (weatherData) => {
    const city = document.getElementById('currentWeatherCity');
    const degrees = document.getElementById('currentWeatherDegrees');
    const condition = document.getElementById('currentWeatherCondition');
    const rainProbability = document.getElementById('currentWeatherRainProbability');
    const lowHigh = document.getElementById('currentWeatherLowHigh');
    const uv = document.getElementById('currentWeatherUV');
  
    // Update the elements with the data from weatherData
    city.textContent = weatherData.location.LocalizedName;
    degrees.textContent = `${weatherData.DailyForecasts[0].Temperature.Minimum.Value}°`;
    condition.textContent = weatherData.DailyForecasts[0].Day.IconPhrase;
    rainProbability.textContent = `${weatherData.DailyForecasts[0].Day.PrecipitationProbability}% Probability of Rain`;
    lowHigh.textContent = `${weatherData.DailyForecasts[0].Temperature.Minimum.Value}° Low / ${weatherData.DailyForecasts[0].Temperature.Maximum.Value}° High`;
  
    // Find the UV index 
    const uvIndex = weatherData.DailyForecasts[1].AirAndPollen.find((item) => item.Name === 'UVIndex').Value;
    uv.textContent = getUVLevelText(weatherData.DailyForecasts[0].AirAndPollen[5].Value);
};

  function getUVLevelText(uvIndex) {
    if (uvIndex >= 0 && uvIndex <= 2) {
        return `Low UV Levels ${uvIndex}`;
    } else if (uvIndex >= 3 && uvIndex <= 5) {
        return `Moderate UV Levels ${uvIndex}`;
    } else if (uvIndex >= 6 && uvIndex <= 7) {
        return `High UV Levels ${uvIndex}`;
    } else if (uvIndex >= 8 && uvIndex <= 10) {
        return `Very High UV Levels ${uvIndex}`;
    } else if (uvIndex >= 11) {
        return `Extreme UV Levels ${uvIndex}`;
    } else {
        return `Unknown UV Levels ${uvIndex}`;
    }
}

