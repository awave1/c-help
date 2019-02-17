const request = require('request-promise-native');

const OPEN_WEATHER_KEY = '0915cdff7d7c7b2fcdfea98dfb2adace';

const URL = params =>
  `https://api.openweathermap.org/data/2.5/weather?q=${params}&units=metric&appid=${OPEN_WEATHER_KEY}`;

const forecastUrl = city =>
  `http://api.openweathermap.org/data/2.5/forecast/?q=${city}&units=metric&cnt=5&appid=${OPEN_WEATHER_KEY}`;

const getCurrentWeather = async city => {
  const url = URL(city);

  console.log(url, '\n');
  const response = await request.get(url);
  return JSON.parse(response);
};

const getFiveDayForecast = async city => {
  const url = forecastUrl(city);
  console.log(url, '\n');
  const response = await request.get(url);
  return JSON.parse(response);
};

module.exports = { getCurrentWeather, getFiveDayForecast };
