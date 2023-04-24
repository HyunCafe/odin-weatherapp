### HTML Layout

Mobile first design.

Hamburger Menu Top Right
Centered City
Centered Weather Degrees
Centered Sunny/Rainy Etc

1 row 3 grid, probability of rain , temperature, uv levels

separator 

7 Hour timeline of weather
3 rows (7 grids)
Time
Degrees
Sunny/rainy/cloudy

Container
7 rows 3 columns
each row = col 1 day of the week / col 2 Sunny/rainy/cloudy / col 3 degrees low and high

Container Humidity
1 row 2 columns, Humidity, Percentage


Container
Day Time Local Time
sun rise to sunset with arch graph


### Project Layout
JavaScript modules:

api.js: Responsible for making API requests to a weather service (e.g., OpenWeatherMap, Weather API, or AccuWeather API) and handling the API responses.
hamburger.js: Manages the functionality of the hamburger menu, such as opening and closing it on user interaction.
current-weather.js: Takes care of displaying the current weather information on the webpage, such as temperature, weather condition, and location.
hourly-forecast.js: Manages the display of the hourly weather forecast data on the webpage, such as temperature and weather condition for each hour.
weekly-forecast.js: Handles the display of the weekly weather forecast data on the webpage, including the day of the week, weather condition, and low/high temperatures.
humidity.js: Manages the display of humidity information on the webpage, such as current humidity percentage and possibly humidity trends.
day-time.js: Takes care of displaying the sunrise and sunset times on the webpage, which could be useful for users to plan their outdoor activities.
utils.js: Contains utility functions that can be shared across different modules, such as date formatting, temperature conversion, or other common tasks that might be needed by multiple modules.


### Feature Plans

Mobile first design
Hamburger menu
Current weather display
Hourly forecast
Weekly forecast
Humidity
Sunrise and sunset times

### Libraries / APIs
[Skycons](https://darkskyapp.github.io/skycons/)
[AccuWeather](https://developer.accuweather.com/)

Choose an API: Select a weather API to use, such as OpenWeatherMap, Weather API, or AccuWeather API. Sign up for an API key if required.

Create the api.js module: In your api.js file, create a function to fetch the weather data from the chosen API. You can use the fetch function in JavaScript to make an API request. You'll need to pass your API key and any required parameters, such as location, to the API.

Handle the response: After fetching the data, you'll need to handle the API response. If the response is successful, extract the relevant weather information from the response and pass it to the appropriate functions to display the data on your app. If there's an error, handle it gracefully by showing an error message to the user.

Integrate the api.js module: Import the api.js module into your main JavaScript file and call the function to fetch the weather data when your app loads. You can also add event listeners to trigger the API call when the user searches for a specific location or updates their settings.

Display the data: In the respective JavaScript modules for the current weather, hourly forecast, and weekly forecast, create functions to update the HTML with the fetched weather data. You can use DOM manipulation methods like innerHTML, textContent, or insertAdjacentHTML to update the content.

Add Skycons: Once you have the weather data, you can also integrate Skycons to display animated weather icons.

Test and refine: Test your app to ensure that it works as expected. Make any necessary refinements to the design or functionality.